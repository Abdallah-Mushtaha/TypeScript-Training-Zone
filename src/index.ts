let s = 10;
const y: string = "For Restric should be string";
s = 5;
s = 90;
// s="Hello" //Type 'string' is not assignable to type 'number'
s = 85;

let isTrue: boolean = false;
const myName = "Abdallah Mushtaha";
const number = 5986;
alert(s);

// types
let arr1 = [1, 2, 3, 5, 8, 7];
let arr2: string[] = ["ali", "mahmode", "ola"];
let arr3 = ["Maram", 50, 70, false];
let arr4: (string | number | boolean)[] = ["ali", 50, 70, false];
let arr5: any[] = ["ramy", 50, 70, false];
var num: any = 58;
num = "ITS works";

// tuble type انو عندي مثلا مصفوفه بعدد محدد وانواع محدده
let tuple: [string, number] = ["mio", 75];
let q: (string | number)[] = ["aw", 85]; // the symbol "|" not mean or its union with tow type
q.push(10); //no problem
tuple.push(54); // Error its Limition with custem Types ,custem size of Array

// Function Types
function itsOK() {
  return 10;
}
itsOK(); //return number

// type Voide
const welcome = (() => {
  console.log("welcom");
})(); //call it self "arrow Function"

const nn: () => string = () => {
  return "Hi";
};
const test: (xs: number, ys: number) => number = (xs, ys) => {
  return xs + ys;
};
const z = (z: number, a: boolean) => {
  return ["Jamil", 82];
}; //z: (z: number, a: boolean) => (string | number)[]

// u can declaer your custem type by : interface ,Enum ,Class , Type
/*
هدول ال
types,class ,enum,interfaces 
ممكن اصللهم من موديل ثاني من ملوف ثاني في رياكت عن طريق اني اعمل الهم
export 
import 
*/

interface Person {
  name: string;
  age?: number; // thats mean its optinal
}

let testin: Person;
testin = {
  name: "Ale",
};

testin = {
  name: "Marah",
  age: 20,
};

// Type

type custemType = string | number;

let address1: custemType = "aas";
let address2: custemType = 54641231;
let address3: custemType = 520;

// autoCompile
console.log(testin.name);
const age: number | undefined = testin.age;
const agenum = testin.age!; // ! mean Im sure it have value
const ageNumber: number = testin.age ?? 0;

// Enumيستخدم لمن يكون عندك متغير قيمته تحتوى عدت احتمالات معينه

enum BookingStatus {
  inital = "inital",
  paid = "paid",
  cancelld = "canncelld",
}

let BookState: BookingStatus = BookingStatus.inital;

BookState = BookingStatus.paid;

if (BookState == BookingStatus.paid) {
  //  Dedecut aout from the user
}

interface Icar {
  model: string;
  year: number;
  calc: () => void;
}
class car implements Icar {
  model: string;
  year: number;
  constructor(module: string, year: number) {
    this.model = module;
    this.year = year;
  }
  calc(): void {
    console.log("Calculation-Function");
  }
}

// generics  زي صندوق فارغ بيتم تحديد فيه نوع ال تايب 
function sumition<T>(num1:T,num2:T){
    // const ys:T;
    // return num1 + num2 ;
}

// sumition<string>(10,50) //Argument of type 'number' is not assignable to parameter of type 'string'.
sumition<string>("Alkd","adisj")
// sumition<number>("Alkd","adisj") // Error

// Genral Object Type 
//طريقة لاخلي الاوبجيكت يقبل اي كي واي فاليو واقدر اتحكم بالكيز مستقبلا 
interface Personal {
   [key:string]:any
    
}
//  the Key should be String the Value Any  "In line Type" 
// const obj :{[key:string]:any} ={
//     name:"Abood",
//     age:21
// }
const obj :Personal ={
    name:"Abood",
    age:21
}
obj.addres ="410";
console.log(obj.name);

// TypeScript uilities 
/*
ادوات وطرق اضافيه بتقدمها تايب سكريبت زي لمن تدمج 2انترفيس مع بعض 
او نسوي شئ شبيه بمهوم الوراثة بل
oop
في يوتيلتيز كثير بتقدمها تايب سكريبت احنا رح نمر على 4 
omit ,parcial ,requird,pic
================
omit 
زي لمن يكون في عندي اوبجيكت او انترفيس بدي استخدموا كلو بس ما بدي بروبرتي معينه 

pick => هي العكس وتعني ايش العناصر ال بدك تاخدهم واي شئ غيرهم هيتم استثنائم 
partial بدي كل الفيلدز ال في الانترفيس يكونوا اوبشنل 
requierd بدي كل الفيلدز تكون موجوده 
*/
interface Personalty {
   name :string,
   age:number,
   Email:string
}

interface PersonWithOutEmail extends Omit<Personalty,"Email"|"age" >{}

const person :PersonWithOutEmail={
    name:"mara",
    // age:540 //Object literal may only specify known properties, and 'age' does not exist in type 'Omit<Personalty, "age" | "Email">'.

 }  
 interface PersonOnlyEmail extends Pick<Personalty,"Email"|"age" >{}

const p :PersonOnlyEmail={
    // name:"mara" //Object literal may only specify known properties, and 'name' does not exist in type 'Pick<Personalty, "Email">'.
    Email:"Abood@gmail.com",
    age:54
} 
// Partial
interface car {
   name :string,
    model:string
}

interface optinalCar extends Partial<car>{}


const pa :optinalCar={
    name:"Abood", 
} 


// Required
interface car2 {
   Carname ?:string,
    model?:string
}

interface ReaquiredCar extends Required<car2>{}


const req :ReaquiredCar={
    Carname:"Abood", 
    model:"Se2020"
}

interface Emploey extends Partial<Personalty>,Required<car2>{} // طبعا في كونفليجت في اسمها الفيلد ف ممكن نغير وحده

const data :Emploey={
       Carname:"Abood", 
    model:"Se2020"
}


// ======= The same Think with type ====== 

type carr ={
   Carname :string,
    model:string
}

type Personn = {
   name :string,
   age:number,
   Email:string
}

type withoutname = Omit<Person,"name">

type integrations= carr & Personn

const obje:integrations={
 name :"Ali",
   age:number,
   Email:"saasdasd",
      Carname :"BMW",
    model:"ada598"
}

// Promis
const  myFunction = async()=>{
    return"Hi everyOne";
    
}
//  new Promise<string> تمثل التايب ال هعملو ريسولف 
const myFunction2 =()=>{
    new Promise<string>((resolve,reject)=>{
        resolve("Hello Abood")
    })
}
const xx=  myFunction(); // لمن اعمل wait معناه بدي انتظر لبروميس ليكتمل ويرجعلي النتيجه النهائة 
// غير كدا هيرجع ال بروميس زي ما هيا 