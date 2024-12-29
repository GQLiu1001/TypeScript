// TS
let a: string = 'Hello';
let b: number = 0;
let c: any
c = 'a'
c = 3
c = [a,'s','sq']
let person: {
    name: string ,
    // ?:可以有可以没有
    age?: number ,
    // 可以有任何的值对应一个key
    [key : string]: any
}
person = {
    name : 'A',
    age : 20,
    email : 'a@example.com',
    city : '北京'
}
// 委托函数 一个函数接受俩num 返回一个num 这个是TS的委托函数箭头 函数类型
let count : (a:number,b:number)=>number;
// 这个是JS的胖箭头
count =(a,b)=>
{
    return a+b;
}
console.log(count(1,3)); //4
let arr1: string[] = ['a','b','c','d','e','f'];
let arr2: Array<string> = ['a','b','c','d','e','f'];
let arr3: Array<string>
let arr4: Array<number>


// enum 定义一组命名常量 好维护 直观 全都点
// 常量枚举 内联
const enum Direction {
    Up,
    Down,
    Left,
    Right
}
function walk(data:Direction){
    console.log(data)
    if (data==Direction.Up){
        console.log('up')
    }else if(data==Direction.Down){
        console.log('down')
    }else if(data==Direction.Left){
        console.log('left')
    }else if(data==Direction.Right){
        console.log('right')
    }
}
walk(Direction.Up)
//type 定义自己的类型 可以是number也可以是string
// 限制输入
// | 或者
// & 并且
type Area = {
    height:number,
    width:number
};
type Form = {
    name : string,
}
type House = Area & Form
const house = {
    height:3,
    width:3,
    name:'House',
}


type Status = number | string
type Gender = 'male' | 'female'
function  logGender(gender:Gender){
    console.log(gender)
}
logGender('male')
//LogFunc类型 是()=> void
// ()=> void 是输入null 返回void
type LogFunc = ()=> void
//方法签名只关注方法形参类型,不关注返回值类型
const f1: LogFunc = ()=> console.log(999)
const f2: LogFunc = function(){
   console.log('a')
}
f1()
f2()

//类
class Person {
    name : string
    age : number
    constructor(name : string, age : number) {
    this.name = name;
    this.age = age;
    }
    speak() {
        console.log(`${this.name}'吃'`)
    };
}
class Student extends Person {
    grade: number
    constructor(name : string, age : number, grade : number) {
    super(name, age);
    this.grade = grade;
    }
    study(){
        console.log(`${this.name} study ${this.grade} 年级`);
    }
    override speak() {
        console.log(`学生类 ${this.name}'吃'`)
    };
}
const s1 = new Student('小米',29,3);
s1.speak()
s1.study()
