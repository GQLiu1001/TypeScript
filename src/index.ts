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



//装饰器 是一个方法（函数） 用在类的注解上一个@ 只有一个参数target
function Demo(target:Function){
    console.log(target)
}
@Demo
class Person1 {
    constructor(public name : string,public age : number) {}
}
//new 表示可以用new操作 ...args构造器可以接受任意数量的参数
//any[]构造器可以接受任意类型参数 {}返回类型是对象 (非NULL 非UNDEFINED)
type Constructor = new (...args:any[]) => {};
//传入的T必须满足Constructor
function LogTime<T extends Constructor>(target:T){
    //返回的新类具有原本所有的属性
    return class extends target {
        createdTime:Date
        constructor(...args:any[]) {
            super(...args);
            this.createdTime = new Date();
        }
        getTime(){
            return `创建时间是${this.createdTime}`;
        }
    }
}

@LogTime
class Person2 {
    constructor(public name : string,public age : number) {}
}
interface Person2 {
    getTime():void
}
let pp2 =new Person2('小明',14)
console.log(pp2)
console.log(pp2.getTime())

//装饰器工厂 return返回一个装饰器
function LogInfo(n:number){
    return function (target:Function){
        target.prototype.intro = function (){
            for (let number = 0; number < n; number++) {
                console.log(`我是${this.name} ${this.age} `);
            }
        }
    }
}
@LogInfo(3)
class Person3 {
    constructor(public name : string,public age : number) {}
    introduce():void{}
}
interface Person3 {
    intro():void
}
let  pp3 = new Person3('小李',20)
pp3.intro()
//类上可以组合工厂装饰器 工厂从上到下 装饰器从下到上

//类装饰器   ↑ 拓展功能方法 拓展属性 target.prototype
//属性装饰器  ↓
function Demo1(target:object,propertyKey:string){
    //target原型对象或类本身 对于静态属性是类，对于实例属性是类的原型对象
    // propertyKey 属性名

}
//age 一改 就要知道变化 用实例对象解决闭包问题
function State(target:object,propertyKey:string){
    let key = `__${propertyKey}`;
    Object.defineProperty(target,propertyKey,{
        get(){
            return this[key];
        },
        set(val:any){
            console.log(`age的最新值为${val}`)
            this[key] = val
        }
    })
}
class Person4 {
    @Demo1 name : string
    @State age : number
    @Demo1 static school:string
    constructor( name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}
const pp = new Person4('晓燕',88)
