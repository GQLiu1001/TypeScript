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
//类属性的简写形式
class Teacher  {
    constructor(public name : string,public age : number,public grade : number) {
    }
}
let t1= new Teacher("了",82,3)
console.log(t1.age)
console.log(t1.grade)
console.log(t1.name)


abstract class Package{
    constructor(public name : string,public number : number) {}
    abstract calculate():number
    public getInfo(){
        return `${this.name} 运了 ${this.number} 个`
    }
}
class Apple extends Package {
    constructor(public name : string,public number : number , public uniPrice : number) {
        super(name, number);
    }
    calculate() {
        return this.uniPrice * this.number;
    }
}
let apple = new Apple("苹果",3,10);
console.log(apple.getInfo(),`花了`,apple.calculate());

interface PersonInterface{
    name : string,
    age : number,
    speak():void
}
class LiMing implements PersonInterface{
    constructor(public name : string,public age : number) {
    }
    speak() {
        for (let i = 0; i < this.age; i++) {
            console.log(`${this.name} ${this.age}岁了`);
        }
    }
}
let liMing = new LiMing('黎明',6)
liMing.speak()

function Data<T>(data1:T):T{
    return data1;
}
console.log(Data<number>(22))
function Data2<T,U>(data1:T,data2:U):T|U{
    return Date.now()%2 ? data1 : data2;
}
console.log(`现在时间是`,Date.now(),Data2<string,string>('奇数时间','偶数时间'))

let num1= 40
let num2= 3
console.log(num1%2)
console.log(num2%2)
console.log(num1%2? "1" : '0')
console.log(num2%2? "1":"0")


