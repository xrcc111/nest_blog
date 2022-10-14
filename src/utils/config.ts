import { parse } from 'yaml';
import * as path from 'path';
import * as fs from 'fs';

// 获取项目运行环境
export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

// 判断当前是否为开发环境
export const IS_DEV = getEnv() === 'dev';

// 读取项目配置
export const getConfig = () => {
  const enviroment = getEnv();
  console.log(enviroment, '当前环境');
  const yamlPath = path.join(process.cwd(), `./application.${enviroment}.yml`);
  const file = fs.readFileSync(yamlPath, 'utf-8');
  const config = parse(file);
  return config;
};
