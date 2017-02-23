/**
 * Created by yuan on 2/22/2017.
 * export default : 为模块指定默认输出
 */

export default function foo() {
    console.log('export default!')
}

export function hi(name) {
    console.log(name + ' say hi!');
}

// export {foo as default}
// export default foo
