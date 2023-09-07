import * as path from "path";
import * as fs from "fs-extra";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
import { config } from "../vite.config";

const buildAll = async () => {
  // 全量打包
  build(defineConfig(config as UserConfig) as InlineConfig);

  const baseOutDir = config.build.outDir;
  const srcDir = path.resolve(__dirname, "../src");
  const componentsDir = fs.readdirSync(srcDir).filter((name) => {
    // 过滤文件只保留index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });
  for (let name of componentsDir) {
    const outDir = path.resolve(baseOutDir, name);
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name,
        fileName: `index`,
        formats: ["es", "umd"],
      },
      outDir,
    };

    Object.assign(config.build, custom);
    await build(defineConfig(config as UserConfig) as InlineConfig);

    fs.outputFile(
      path.resolve(outDir, "package.json"),
      `{
        "name": "gzdl-ui/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js"
      }`,
      "utf-8",
    );
  }
};

buildAll();
