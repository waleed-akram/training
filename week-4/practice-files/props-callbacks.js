function sum(a,b){
  return a + b;
}

// sum(1,2);

function multiply(a,b){
  return a * b;
}

function calculator(a,b,operation){
  return operation(a,b);
}

console.log(calculator(2,3,sum)); // 5
console.log(calculator(2,3,multiply)); // 6

