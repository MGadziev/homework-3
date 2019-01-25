//Задача 1
function printWindowValues() {
  for (var i in window) {
  console.log(i, window[i]);
  }
}
printWindowValues();

//Задача 2
function expTen(a) {
  var res=1;
for (var i=0; i<10; i++) {
  res=res*a;
}
return res;
}
console.log(expTen(2));

//Задача 3
function getFuncRes(tomAndJerry, a) {
  return(tomAndJerry(a));
}
getFuncRes(console.log, "Hello World");
