#!/bin/bash

/home/ubuntu/.nvm/versions/node/v18.3.0/bin/pm2 stop all
/home/ubuntu/.nvm/versions/node/v18.3.0/bin/pm2 delete all
/home/ubuntu/.nvm/versions/node/v18.3.0/bin/npm install
/home/ubuntu/.nvm/versions/node/v18.3.0/bin/npm run build
/home/ubuntu/.nvm/versions/node/v18.3.0/bin/pm2 start /home/ubuntu/.nvm/versions/node/v18.3.0/bin/npm --name "next" -- start
