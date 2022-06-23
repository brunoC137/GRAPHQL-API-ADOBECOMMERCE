#!/bin/bash
#npm and install dependencies
sudo npm install npm@latest -g
sudo npm install -g newman
sudo npm install -g newman-reporter-htmlextra
sudo npm install json-to-schema   
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
install vim
install docker

#Run first Test
npm run native_apis environment/Native-environment.json 2>/dev/null || true
