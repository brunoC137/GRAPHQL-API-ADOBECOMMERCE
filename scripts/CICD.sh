#!/bin/bash
DEPENDENCIES=(awk python aws docker)
function aws_session() {
  AWS_DEFAULT_REGION="${AWS_DEFAULT_REGION}" \
  AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID}" \
  AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY}" \
  aws ${*}
}

#install docker
#docker build --no-cache -t testes-api -f ./Dockerfile


docker build --build-arg AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION \
--build-arg AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
--build-arg AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
--no-cache -t testes-api -f ./Dockerfile 
