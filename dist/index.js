let s = 10;
const y = "For Restric should be string";
s = 5;
s = 90;
// s="Hello" //Type 'string' is not assignable to type 'number'
s = 85;
let isTrue = false;
const myName = "Abdallah Mushtaha";
const number = 5986;
alert(s);
// types
let arr1 = [1, 2, 3, 5, 8, 7];
let arr2 = ["ali", "mahmode", "ola"];
let arr3 = ["Maram", 50, 70, false];
let arr4 = ["ali", 50, 70, false];
let arr5 = ["ramy", 50, 70, false];
var num = 58;
num = "ITS works";
// tuble type انو عندي مثلا مصفوفه بعدد محدد وانواع محدده
let tuple = ["mio", 75];
let q = ["aw", 85]; // the symbol "|" not mean or its union with tow type
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
const nn = () => {
    return "Hi";
};
const test = (xs, ys) => {
    return xs + ys;
};
const z = (z, a) => {
    return ["Jamil", 82];
}; //z: (z: number, a: boolean) => (string | number)[]
let testin;
testin = {
    name: "Ale",
};
testin = {
    name: "Marah",
    age: 20,
};
let address1 = "aas";
let address2 = 54641231;
let address3 = 520;
// autoCompile
console.log(testin.name);
const age = testin.age;
const agenum = testin.age; // ! mean Im sure it have value
const ageNumber = testin.age ?? 0;
// Enumيستخدم لمن يكون عندك متغير قيمته تحتوى عدت احتمالات معينه
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["inital"] = "inital";
    BookingStatus["paid"] = "paid";
    BookingStatus["cancelld"] = "canncelld";
})(BookingStatus || (BookingStatus = {}));
let BookState = BookingStatus.inital;
BookState = BookingStatus.paid;
if (BookState == BookingStatus.paid) {
    //  Dedecut aout from the user
}
class car {
    model;
    year;
    constructor(module, year) {
        this.model = module;
        this.year = year;
    }
    calc() {
        console.log("Calculation-Function");
    }
}
// generics  زي صندوق فارغ بيتم تحديد فيه نوع ال تايب 
function sumition(num1, num2) {
    // const ys:T;
    // return num1 + num2 ;
}
// sumition<string>(10,50) //Argument of type 'number' is not assignable to parameter of type 'string'.
sumition("Alkd", "adisj");
//  the Key should be String the Value Any  "In line Type" 
// const obj :{[key:string]:any} ={
//     name:"Abood",
//     age:21
// }
const obj = {
    name: "Abood",
    age: 21
};
obj.addres = "410";
console.log(obj.name);
const person = {
    name: "mara",
    // age:540 //Object literal may only specify known properties, and 'age' does not exist in type 'Omit<Personalty, "age" | "Email">'.
};
const p = {
    // name:"mara" //Object literal may only specify known properties, and 'name' does not exist in type 'Pick<Personalty, "Email">'.
    Email: "Abood@gmail.com",
    age: 54
};
const pa = {
    name: "Abood",
};
const req = {
    Carname: "Abood",
    model: "Se2020"
};
const data = {
    Carname: "Abood",
    model: "Se2020"
};
const obje = {
    name: "Ali",
    age: number,
    Email: "saasdasd",
    Carname: "BMW",
    model: "ada598"
};
// Promis
const myFunction = async () => {
    return "Hi everyOne";
};
//  new Promise<string> تمثل التايب ال هعملو ريسولف 
const myFunction2 = () => {
    new Promise((resolve, reject) => {
        resolve("Hello Abood");
    });
};
const xx = myFunction(); // لمن اعمل wait معناه بدي انتظر لبروميس ليكتمل ويرجعلي النتيجه النهائة 
export {};
// غير كدا هيرجع ال بروميس زي ما هيا 
//# sourceMappingURL=index.js.map