import { identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys } from "./src/mild/mild_2.js";
console.log(identifyVariable(4));
console.log(identifyArray(['some', 3, [3, 4], false]));
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
}
//console.log("bookmark1");
console.log(removeKey(obj, obj.password));

let obj2 = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
}
console.log(removeKeyNonDestructive(obj2, obj2.password));
console.log("bookmark2");
//console.log(removeKeys());