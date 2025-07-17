!/bin/bash

cd ./docs/.vitepress/dist

# git init

git add .

git commit -m "重新部署"

# git remote add blog git@github.com:xiaoda001/xiaoda001.github.io.git

git push -f blog master
