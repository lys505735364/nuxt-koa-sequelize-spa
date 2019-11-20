const defaultConfig = './config-def.js';
// const overrideConfig = './config-override.js';
// const testConfig = './config-test.js';

const fs = require('fs');

var config = null;

// if (process.env.NODE_ENV === 'test') {
//     console.log(`读取数据库配置(test) ${testConfig}...`);
//     config = require(testConfig);
// } else {
    console.log(`读取数据库配置(default) ${defaultConfig}...`);
    config = require(defaultConfig);
//     try {
//         if (fs.statSync(overrideConfig).isFile()) {
//             console.log(`读取数据库配置(override) ${overrideConfig}...`);
//             config = Object.assign(config, require(overrideConfig));
//         }
//     } catch (err) {
//         console.log(`读取数据库配置(override) 失败 ${overrideConfig}.`);
//     }
// }

module.exports = config;