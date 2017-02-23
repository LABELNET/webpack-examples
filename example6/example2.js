/**
 * Created by yuan on 2/22/2017.
 */
console.log(1, ...[2, 3, 4], 5);
console.log((v => v * v)(2));

function f(x, y) {
    return {x, y};
}

function f1(x, y) {
    return [x, y];
}

console.log(f(1, 2));
console.log(f1(1, 2));
var f2 = f1(1, 2);
for (let v of f2) {
    console.log(v);
}

var f3 = f(1, 2);
function getItem(key) {
    return key in f3 ? f3[key] : null;
}

console.log(getItem('x'));