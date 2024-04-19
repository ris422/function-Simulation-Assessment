import flatten from "../Problems/flatten.js";
const nestedArray = [1, [2], [[3]], [[[4]]]];
if (!Array.isArray(items)){
    console.log('items should be typeof array');
}
else{
    console.log(flatten(nestedArray));
}