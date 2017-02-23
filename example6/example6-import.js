/**
 * Created by yuan on 2/22/2017.
 * import  : 静态加载
 * import() ：动态加载，返回Promise对象，类似require
 */
import {filename, filename2 as f2} from "./example6-1";
import * as reac from "./example6-2";
import def, {hi as say} from "./example6-3";
import {db} from './example6-5'

console.log(filename);
console.log(f2);
console.log(reac.area(1, 2));
console.log(reac.ference(1, 2));
def();
say('labelnet');
console.log(db.name+' | '+db.pass);

// import('./example2').then()