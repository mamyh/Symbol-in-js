// symbol in javascript 
var symbol1=Symbol('mamun'); //symbol with description
var symbol2 = Symbol.for('mamun');//with the using of for mamun is now become a key 
console.log(symbol1);//result we got is not actual value

var name1=Symbol.for('name');
var name2 = Symbol.for('name');
console.log(name1===name2);
// console.log(name);//symbol key name
// console.dir(name);

var cricket = Symbol.for('i am a cricketer');
var test='this is a test string';

var obj = {
    shakib : 'sakib',
    [cricket]:"bangladesh", //dynamic property. this is one of the reasons symbol is come for
    test:'test',
    [test]:'this is another test ' //dynamic properity
}
console.log(obj);

// 3 purpose of symbol 
//symbol is invisible
var object = {}
object.name = 'javascript';
object.estd = 1995;
object[Symbol('founder')] = 'Brendar Eich';
console.log(object);
for(let key in object){
    console.log(key);//symbol is invisible to for as well
}
console.log(Object.keys(object))//here symbol is invisible too 

//Avoid name collusion in global
var includes=Symbol('i am not symbol');
Array.prototype[includes] = ()=>{
    console.log('i am something awesome for you');
}
var myArray=[1,2,3];
console.log(myArray.includes(2));//defualt includes function in array
console.log(myArray["includes"](2))//default inludes in defferent way
myArray[includes](2)//created by symbol and its not collied.