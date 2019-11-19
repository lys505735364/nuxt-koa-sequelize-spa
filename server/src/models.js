const fs = require('fs');
const modelBuild = require('../utils/modelBuild');

let files = fs.readdirSync(__dirname + '/models');

let js_files = files.filter((f)=>{
    return f.endsWith('.js');
}, files);

module.exports = {};

for (let f of js_files) {
    console.log(`读取数据模型构造文件 ${f}...`);
    let obj = require(__dirname + '/models/' + f);
    module.exports[obj.name] = obj.data;
}

module.exports.sync = () => {
    modelBuild.sync();
};