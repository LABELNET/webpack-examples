/**
 * Created by yuan on 2/22/2017.
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ' , ' + this.y + ')';
    }
}

var point = new Point(1, 2);
console.log(point.toString());


//继承
class DemoPoint extends Point {
    constructor(name, x, y) {
        super(x, y);
        this.name = name;
    }

    toString() {
        return this.name + ' | ' + super.toString();
    }
}
var demoPoint = new DemoPoint('labelnet', 1, 2);
console.log(demoPoint.toString());



