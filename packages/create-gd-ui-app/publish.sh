#! /usr/bin/env bash
# 切换镜像为原始库, 将原来镜像url保存在mirror变量中
mirror=`npm config get registry`
npm config set registry=https://registry.npmjs.org/

echo "请进行登录相关操作: "
npm login # 登录npm, 因为第一次发布比较严格，需要输入验证码
echo "——————————publishing——————————"
npm publish # 发布

# 还原镜像
npm config set registry=$mirror
echo "发布完成"
exit