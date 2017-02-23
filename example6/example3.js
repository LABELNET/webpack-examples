/**
 * Created by yuan on 2/22/2017.
 * set and map
 * :操作
 * add(v)
 * delete(v)
 * has(v)
 * clear(v)
 * :遍历
 * keys()
 * values()
 * entries()
 * forEach()
 *
 *
 */
const s = new Set();

[21, 2, 3, 2, 15, 4, 2].forEach(x => s.add(x));

console.log('values and keys');
for (let v of s.values()) {
    console.log(v);
}
console.log('entries');
for (let v of s.entries()) {
    console.log(v);
}

console.log('maps');
for (let v of [...s].map(x => x)) {
    console.log(v);
}

console.log('filter');
for (let v of [...s].filter(x => (x % 2) == 0)) {
    console.log(v);
}

var map=new Map().set('k1','lao').set('k2',12);

console.log('Map !!');
for (let [k,v] of map){
    console.log(k,v);
}

//map 转对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

//map 转json : 需要先转为对象，在转为json
function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}
//json 转map
function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

console.log('JSON');
console.log(strMapToJson(map));