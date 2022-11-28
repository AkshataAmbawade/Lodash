const _=require('lodash')
// _.clone
// _.cloneDeep
// _.eq -> isEqual
// _.gt==>Checks if value is greater than other.
// _.gte==>Checks if value is greater than or equal to other.
// _.isArguments==>Checks if value is classified as an arguments object.
// _.isArray==>Checks if value is classified as an Array object.
// _.isBoolean==>Checks if value is classified as a boolean primitive or object.
// _.isDate==>Checks if value is classified as a Date object.
// _.isElement==>Checks if value is a DOM element.
// _.isEmpty==>Checks if value is empty. 
// _.isEqual==>Performs a deep comparison between two values to determine if they are equivalent
// _.isError==>Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object.
// _.isFinite==>Checks if value is a finite primitive number.
// _.isFunction==>Checks if value is classified as a Function object.
// _.isMatch==>Performs a deep comparison between object and source to determine if object contains equivalent property values. 
// _.isNaN==>Checks if value is NaN.
// _.isNative==>Checks if value is a native function.
// _.isNull==>Checks if value is null.
// _.isNumber==>Checks if value is classified as a Number primitive or object.
// _.isObject==>Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
// _.isPlainObject==>
// _.isRegExp==>Checks if value is classified as a RegExp object.
// _.isString==>Checks if value is classified as a String primitive or object.
// _.isTypedArray==>Checks if value is classified as a typed array.
// _.isUndefined==>Checks if value is undefined.
// _.lt==>Checks the value is less than or not
// _.lte==>Checks the value is less than or less than equal to 
// _.toArray==>Converts to an array
// _.toPlainObject==>Converts value to a plain object flattening inherited enumerable properties of value to own properties of the plain object.


// console.log(_.gt(3,1))
// console.log(_.gte(3,1))
// console.log(_.isArguments(function() { return arguments; }()))
// console.log(_.isArguments([1, 2, 3]))
// console.log(_.isArray([1,2,3,4,5]))
// console.log(_.isBoolean(true));
// console.log(_.isBoolean(akshata));
// console.log(_.isDate(new Date))
// console.log(_.isDate("Monday 22, 10,2022"));
// console.log(_.isElement("sk"));
// const array=[1,2,3,4,5];
// console.log(_.isEmpty(array));
// const array=[];
// console.log(_.isEmpty(array));
// console.log(_.isError(new Error));
// console.log((_.isError(Error)));
// console.log(_.isFinite(10));
// console.log(_.isFinite("akshata"));
// const even=function(n){
//     return n%2==0
// }
// console.log(_.isFunction(even));
// const obj={'user':'akshata','rollNo':1}
// console.log(_.isMatch(obj,{'rollNo':1}));
// console.log((_.isMatch(obj,{'user':'smitali'})));
// console.log(_.isNaN(NaN));
// console.log(_.isNaN("ask"));
// console.log(_.isNull("jyfusgfius"))
// console.log(_.isNull(null));
// console.log((_.isNumber(123)));
// console.log((_.isNumber("akshata")));
// console.log(_.isObject({}));
// console.log((_.isObject([1,2,3])));
// console.log((_.isObject(1)));
// console.log((_.isRegExp(/abc/)));
// console.log((_.isRegExp('/abc/')));
// console.log(_.isString('abc'));
// console.log((_.isString(abc)));
// console.log(_.lt(3,1));
// console.log(_.lte(3,1));
// console.log(_.lte(1,1));
// console.log(_.toArray([1]));