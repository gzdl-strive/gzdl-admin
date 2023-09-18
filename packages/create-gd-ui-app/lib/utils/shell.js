import { exec } from "child_process";
import { promisify } from "util";

const _execPromise = promisify(exec);

const shell = async (command, cwd) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { stdout } = await _execPromise(command, {
        cwd,
      });
      resolve(stdout);
    } catch (error) {
      reject(error);
    }
  });
}

export {
  shell
}