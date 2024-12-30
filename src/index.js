var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TS
var a = 'Hello';
var b = 0;
var c;
c = 'a';
c = 3;
c = [a, 's', 'sq'];
var person;
person = {
    name: 'A',
    age: 20,
    email: 'a@example.com',
    city: '北京'
};
// 委托函数 一个函数接受俩num 返回一个num 这个是TS的委托函数箭头 函数类型
var count;
// 这个是JS的胖箭头
count = function (a, b) {
    return a + b;
};
console.log(count(1, 3)); //4
var arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
var arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
var arr3;
var arr4;
function walk(data) {
    console.log(data);
    if (data == 0 /* Direction.Up */) {
        console.log('up');
    }
    else if (data == 1 /* Direction.Down */) {
        console.log('down');
    }
    else if (data == 2 /* Direction.Left */) {
        console.log('left');
    }
    else if (data == 3 /* Direction.Right */) {
        console.log('right');
    }
}
walk(0 /* Direction.Up */);
var house = {
    height: 3,
    width: 3,
    name: 'House',
};
function logGender(gender) {
    console.log(gender);
}
logGender('male');
//方法签名只关注方法形参类型,不关注返回值类型
var f1 = function () { return console.log(999); };
var f2 = function () {
    console.log('a');
};
f1();
f2();
//类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.speak = function () {
        console.log("".concat(this.name, "'\u5403'"));
    };
    ;
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " study ").concat(this.grade, " \u5E74\u7EA7"));
    };
    Student.prototype.speak = function () {
        console.log("\u5B66\u751F\u7C7B ".concat(this.name, "'\u5403'"));
    };
    ;
    return Student;
}(Person));
var s1 = new Student('小米', 29, 3);
s1.speak();
s1.study();
//类属性的简写形式
var Teacher = /** @class */ (function () {
    function Teacher(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    return Teacher;
}());
var t1 = new Teacher("了", 82, 3);
console.log(t1.age);
console.log(t1.grade);
console.log(t1.name);
var Package = /** @class */ (function () {
    function Package(name, number) {
        this.name = name;
        this.number = number;
    }
    Package.prototype.getInfo = function () {
        return "".concat(this.name, " \u8FD0\u4E86 ").concat(this.number, " \u4E2A");
    };
    return Package;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, number, uniPrice) {
        var _this = _super.call(this, name, number) || this;
        _this.name = name;
        _this.number = number;
        _this.uniPrice = uniPrice;
        return _this;
    }
    Apple.prototype.calculate = function () {
        return this.uniPrice * this.number;
    };
    return Apple;
}(Package));
var apple = new Apple("苹果", 3, 10);
console.log(apple.getInfo(), "\u82B1\u4E86", apple.calculate());
var LiMing = /** @class */ (function () {
    function LiMing(name, age) {
        this.name = name;
        this.age = age;
    }
    LiMing.prototype.speak = function () {
        for (var i = 0; i < this.age; i++) {
            console.log("".concat(this.name, " ").concat(this.age, "\u5C81\u4E86"));
        }
    };
    return LiMing;
}());
var liMing = new LiMing('黎明', 6);
liMing.speak();
function Data(data1) {
    return data1;
}
console.log(Data(22));
function Data2(data1, data2) {
    return Date.now() % 2 ? data1 : data2;
}
console.log("\u73B0\u5728\u65F6\u95F4\u662F", Date.now(), Data2('奇数时间', '偶数时间'));
var num1 = 40;
var num2 = 3;
console.log(num1 % 2);
console.log(num2 % 2);
console.log(num1 % 2 ? "1" : '0');
console.log(num2 % 2 ? "1" : "0");
