#!/usr/bin/env node

import figlet from "figlet";
import clear from "clear";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

init();

// 初始化
// 1、清空
// 2、欢迎文本
// 3、运行交互
function init() {
  // 清空之前的输出
  clear();
  // 欢迎文本输出
  const logo = figlet.textSync("create-gd-ui-app", {
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: true,
  });
  const rainbow = chalkAnimation.rainbow(logo);
  // 0.5秒后停止运行打印动画以及执行与用户交互的选项
  setTimeout(() => {
    rainbow.stop();
    query();
  }, 500);
}

const option = {
  "gd-ui-vite应用模版(vite)": "gd-ui-vite",
  "退出": "quit"
};

const questions = [
  {
    type: "list", // 选择框
    message: "请选择要创建的项目",
    name: "operation",
    choices: Object.keys(option),
  },
];

async function query() {
  const { operation } = await inquirer.prompt(questions);

  if (operation === "退出") {
    return;
  }
  const { default: op } = await import(`../lib/operations/${option[operation]}.js`)
  await op();
}