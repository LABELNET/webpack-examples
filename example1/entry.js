/**
 * Created by yuan on 2/21/2017.
 */
require('!style-loader!css-loader!./style.css') //载入css

document.write('hi webpack');
document.write(require('./module'));