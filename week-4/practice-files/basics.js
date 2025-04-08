// // let x= "5"
// // let y= + x;

// // console.log(y)

// // console.log(String(Date()))

// // console.log(typeof(Date()))
// // console.log("....................")
// // console.log(typeof(new Date()))

// // let xy = new Date()

// // console.log(typeof(xy))

// // console.log(typeof(String(false)))

// // let y = NaN;
// // console.log(typeof(y))
// // console.log(y)

// // console.log(String(false))

// // console.log(Number(false))
// // console.log(Number("false"))

// class Person {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getName() {
//     return this.name;
//   }
//   details(){
//     // console.log("Name is: " + this.getName() + " age is: " + this.age);
//     console.log(`Name is : ${this.getName()} and age is: ${this.age}`)
//   }
// }

// const person1 = new Person("Waleed",24);
// person1.details()

// //destructured the properties from the object perosn1
// const {name} =  person1;
// const {age} = person1;
// console.log(name)
// console.log(age)

// //ternary operator
// console.log(name+" is an " + (age>18?"Adult":"Minor"))

// //will not work because an object is not iterable
// // console.log(...person1)

// let a = ["Hi","wyd","hola","no?","then...","bye XD"];
// a.forEach((item,index)=>{
//     // console.log(item);
//     interval =  Math.floor(Math.random()*10000);
//     set(()=>{
//       console.log(index);
//     },interval)
//     })
// setInterval(()=>{
//   console.log(item);
// },Math.floor(Math.random()*1000))

const myPromise = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Promise Resolved");
  },1000);
})

// myPromise.then((value)=>{
//   console.log(value);
// }
// ).catch((error)=>{
//   console.log(error);
// })

async function hehe(){
  const value = await myPromise;
  console.log(value);
}
