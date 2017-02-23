/**
 * Created by yuan on 2/22/2017.
 * generator
 * async & wait ： 执行异步任务完毕，才会执行promise中的then方法
 * promise
 */
function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
console.log(g.next());
console.log(g.next(2));

async function f() {
    return 'hello!';
}

f().then(v => console.log(v));

async function f1() {
    throw new Error('error');
}

f1().then(v => console.log(v)
    , e => console.log(e.message));