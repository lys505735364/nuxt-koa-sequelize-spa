function treeObj(originObj) {
    //对象深拷贝
    let obj = {};
    for (let key in originObj) {
        var val = originObj[key];
        obj[key] = typeof val === 'object' ? arguments.callee(val) : val;
    }
    //对象新增children键值，用于存放子树
    obj['children'] = [];
    return obj;
}

//data：带转换成树形结构的对象数组
//attributes：对象属性
function toTreeData(data, paramsConfig) {
    let childrenArr = data;
    let tree = [];
    let attributes = {
        id: paramsConfig && paramsConfig.id? paramsConfig.id:'id',
        parentId: paramsConfig && paramsConfig.parentId ? paramsConfig.parentId : 'parentId'
    };

    //找寻根节点 将父节点为空,或找不到父节点的 对象复制出去
    for (let i = 0; i < childrenArr.length; i++) {
        if (childrenArr[i][attributes.parentId] === '' || childrenArr[i][attributes.parentId] === null|| childrenArr[i][attributes.parentId] === -1 || childrenArr[i][attributes.parentId] === 0) {
            tree.push(treeObj(childrenArr[i]));
        } else {
            let flag = true;
            for (let j = 0;j<childrenArr.length;j++) {
                if (childrenArr[i][attributes.parentId] === childrenArr[j][attributes.id]){
                    flag = false;
                }
            }
            if (flag) {
                tree.push(treeObj(childrenArr[i]));
            }
        }
    }
    // 剔除父节点
    for (let i = 0; i < tree.length; i++) {
        for (let j = 0;j<childrenArr.length;j++) {
            if (childrenArr[j][attributes.id] === tree[i][attributes.id]){
                childrenArr.splice(j, 1);
                j--;
            }
        }
    }
    run(tree);

    //找寻子树
    function run(rootArr) {
        if (childrenArr.length !== 0) {
            for (let i = 0; i < rootArr.length; i++) {
                for (let j = 0; j < childrenArr.length; j++) {
                    if (rootArr[i][attributes.id] === childrenArr[j][attributes.parentId]) {
                        let obj = treeObj(childrenArr[j]);
                        rootArr[i].children.push(obj);
                        childrenArr.splice(j, 1);
                        j--;
                    }
                }
                run(rootArr[i].children);
            }
        }
    };
    console.log(tree);
    return tree;

}

export default toTreeData;