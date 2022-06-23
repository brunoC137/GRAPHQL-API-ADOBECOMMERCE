FROM node:current-slim

WORKDIR /usr/src/app
COPY . .

ARG AWS_DEFAULT_REGION
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

#npm and aws install dependencies
#RUN npm install npm@latest -g
RUN apt-get update && apt-get install curl -y
RUN apt-get install unzip -y
RUN npm install newman
#RUN npm install newman-reporter-htmlextra
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip -n awscliv2.zip
RUN ./aws/install
RUN npm install aws-sdk && npm install aws && npm install uuid
#config aws keys
RUN aws --profile default configure set aws_access_key_id "AWS_DEFAULT_REGION"
RUN aws --profile default configure set aws_secret_access_key "AWS_ACCESS_KEY_ID"
RUN aws --profile default configure set default.region "AWS_SECRET_ACCESS_KEY"



#npm clean newman folder and run API tests
RUN rm ./newman/*.html || true
RUN npm run native_apis environment/Native-environment.json 2>/dev/null || true
#verify & create buckets and clean recent bucket
RUN node s3_scripts/s3_compare_and_create.js native-report-all
RUN node s3_scripts/s3_compare_and_create.js native-report-recent
RUN aws s3 rm s3://native-report-recent/STAGING --recursive
#upload to bucketsS
RUN node s3_scripts/s3_upload native-report-all/STAGING  ./newman/*.html
RUN mv ./newman/*.html ./newman/newman-STAGING.html
RUN node s3_scripts/s3_upload native-report-recent/STAGING  ./newman/*.html


EXPOSE 8080


