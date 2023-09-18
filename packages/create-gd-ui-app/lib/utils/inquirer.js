import inquirer from "inquirer";

/**
 * 封装好的inquirer.prompt方法，可以允许我们传入callback回调进行处理
 * @param {"input" | "list" | "rawlist" | ...} type
 * @param { name/default/message/... } options 
 * @returns 
 */
const onPrompt = (type, options) => {
  const name = options?.name || "question";
  const { callback, ..._options } = options;
  return inquirer.prompt([
    {
      type,
      ..._options,
      name,
    }
  ]).then(answers => {
    return callback ? callback(answers[name]) : answers[name];
  }).catch(err => {
    throw Error(err);
  });
}

export {
  onPrompt,
}