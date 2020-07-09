(async function () {
    let path = require('path');
    let casbin = require('casbin');

    //创建一个Casbin决策器需要有一个模型文件和策略文件为参数
    const enforcer = await casbin.newEnforcer(path.join(__dirname, 'model.conf'), path.join(__dirname, 'policy.csv'));

    const sub = 'alice'; // the user that wants to access a resource.
    const obj = 'data1'; // the resource that is going to be accessed.
    const act = 'read'; // the operation that the user performs on the resource.

    if (enforcer.enforce(sub, obj, act) == true) {
        // permit alice to read data1
        console.log('>>>>.', true);
    } else {
        // deny the request, show an error
        console.log('>>>>>>>>>', false);
    }
})();
