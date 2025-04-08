/*
function delay(ms){
	return new Promise(resolve => setTimeout(()=>{console.log("Truly Delayed Hello");resolve()},ms));
}
async function delayedGreeting(){
	await//setTimeout(()=>{console.log("Delayed Hello")},0)
	     //setTimeout(function(){return console.log("Delayed Hello")},0)
	     delay(1000)
	console.log("ran after the await statement!")
}

delayedGreeting();
console.log("Not Delayed Hello")

let myPromise = ()=>{
	return new Promise((resolve,reject)=>{
		console.log("This is a promise!")
		resolve();
	}).then(
	result=>{console.log("The promise was resolved!")},
	error=>{console.log("The promise was not resovled!")}
)
}

let response = fetch('https://anyapi.io/social-media',{
	'method':GET,
	'Authorization':'token'
});
console.log(repsonse)

// Assuming you are using a modern JavaScript environment that supports async/await.
async function fetchData() {
  //let response = await fetch('https://rocket-league1.p.rapidapi.com/tournaments/%7Bregion%7D',{
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'
  headers: {
    'x-rapidapi-key': 'ed53ff62ebmshd3703c3e6161c39p157812jsn6195af2cdf1d',
    'x-rapidapi-host': 'rocket-league1.p.rapidapi.com',
    'User-Agent': 'RapidAPI Playground',
    'Accept-Encoding': 'identity'
  }
}
).then(response=>response.json()).then(json=>console.log(json)).finally(msg=>console.log(`The ${msg} has been completed!`))
  
  Check if the response is successful
  if (response.ok) {
    let data = await response.json();  // Parse the response as JSON
    console.log(data);  // Log the actual data
  } else {
    console.log("Error fetching data: " + response.status);
  }
}

fetchData();
*/
/*
class newClass{
	#variable
	constructor(variable){
		this.#variable = variable;
	}
	getVariable(){
		return this.#variable;
	}
}

let obj = new newClass("Waleed");
console.log(obj.getVariable())*/
//console.log(y)
//myFunction()
let y = 5;
function myFunction(val){
	//console.log("HEHEHEHEHE")
	var name = val;
	return {getName:function(){
		return console.log(`the variable is being called through the object! ${name}`)
	}}
	
}

let obj1 = new myFunction("Waleed")
obj1.getName();
//myFunction()
//console.log(`The variable is being called without an object! ${name}`) //will through a referenceError because var has function scope and not global scope!

