#!/bin/bash
#npm and install dependencies
sudo docker build --build-arg AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION} \
--build-arg AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} \
--build-arg AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} \
--no-cache -t testes-api .