import { promisify } from "util";
import download from "download-git-repo";
import ora from "ora";
import { sleep } from "./common.js";

// 使用promisify将download转为Promise
const _downloadPromise = promisify(download);

/**
 * 拉取github仓库模版代码
 * @param {string} repo 仓库地址
 * @param {string} dest 当前目录，项目所在路径
 * @param {*} opts 配置
 */
const pull =  async (repo, dest, opts) => {
  const process = ora(`正在创建......${repo}`);
  process.start();
  try {
    await _downloadPromise(repo, dest, opts);
    process.succeed("创建成功");
  } catch(error) {
    process.fail("拉取失败, 1s 后重试.");
    await sleep(1000);
    return pull(repo, dest, opts);
  }
};

export {
  pull,
}