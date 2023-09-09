#! /usr/bin/env bash
# 切换镜像为原始库, 将原来镜像url保存在mirror变量中
mirror=`npm config get registry`
npm config set registry=https://registry.npmjs.org/
# 打包构建
pnpm run build
# 拷贝npm库需要的package.json以及README
cp package.json dist/package.json && cp README.md dist/README.md
echo "请进行登录相关操作: "
npm login # 登录npm
echo "——————————publishing——————————"
npm publish dist # 发布
# 还原镜像
npm config set registry=$mirror
echo "发布完成"
exit