#! /bin/bash
npm run build
git add .

read message
echo "mensagem do commit: "
git commit -am "$message"
git push origin master
ssh ubuntu@52.67.209.28 -i /home/brendon/Downloads/7dabelgicaa.pem \
  'git -C /home/ubuntu/api' \
  'pull origin master' \
