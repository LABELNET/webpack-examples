/**
 * Created by yuan on 2/22/2017.
 * let : 只在作用域有效;
 * const : 常量，指向的地址不变，只在其作用域有效；
 */
{
    let a=1;
    var b=2;
}
// a
b

var tmp=123;
if(true){
    tmp='abc';
    let tmp;
}