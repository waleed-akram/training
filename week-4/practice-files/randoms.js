// const arr = ["Hi", "Hello", "Hey", "Howdy", "Greetings"];

// // for(let i = 0;i<arr.length;i++){   let delay = Math.floor(Math.random()*5);
// // const display = async ()=>{     await new Promise((resolve)=>{
// // setTimeout(()=>{         console.log(arr[i]);         resolve();
// // },delay*1000);     });   }   display(); } let display = setInterval(()=>{
// // },Math.floor(Math.random()*5)*1000)
// let i = 0;
// let delay;
// let counter = 1;
// function randomDelay(random, i) {
//   delay = Math.floor(Math.random() * 5);
//   if (i < arr.length) {
//     console.log("")
//     process.stdout.write(arr[i]);
//     dot();
//     function dot(){
//       if(counter <= 3){
//         process.stdout.write(".");
//         counter++;
//       } else{
//         counter=1;
//         return
//       }
//       let dots = setTimeout(()=>{
//         counter<=3?dot():clearTimeout(dots);
//       },100)
//     }
//     setTimeout(() => {
//       randomDelay(random, i + 1);
//     }, delay * 1000);
//   }
//   // let counter = 0;
//   // const interval = setInterval(() => {
//   //   process.stdout.write(".");
//   //   counter++;
//   //   if (counter === 3) {
//   //     clearInterval(interval);
//   //   }
//   // }, 1000);
// }

// randomDelay(delay, i);
// // console.log("done");

