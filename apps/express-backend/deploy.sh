#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin

cd /home/ubuntu/week-12-monorepo-full
sudo git pull origin main
yarn install
yarn build
pm2 stop express
pm2 start npm --name "express" -- run "start:express"
