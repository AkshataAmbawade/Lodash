
// Returns the new array containing chunks. we can say array of arrays
//npm i lodash.chunk ====> npm package
//require loadash
const _ = require('lodash')
//REPL==>Read-Eval-Print Loop
// _.chunk==>divides an array in the chunks
// _.compact==>it will remove falsy values and give new array
// _.difference==>it will take unique values from the 0th index array
// _.drop===>it will drop elements from the left side
// _.dropRight==> it will drop elements from the right side
// _.dropRightWhile
// _.dropWhile
// _.fill==>it will fill an array
// _.findIndex==>it will find the element and then give the index
// _.findLastIndex=it will find the element and then give the index
// _.first==>  it will give the first element of an array
// _.flatten==> it will combine an array
// _.flattenDeep it will combine nested array
// _.head -> first==>it will give the first element of an array
// _.indexOf==>it will give the index of serched element
// _.initial==>remove the last element of an array
// _.intersection==>create an array of unique element
// _.last==>gives the last element
// _.lastIndexOf==> give last index of serched elements
// _.object -> zipObject
// _.pull==>pull the element and create new array
// _.pullAt==>create a new array by removing the elements specified by index
// _.remove==>remove the elements
// _.tail==>remove the first element of an array
// _.slice
// _.sortedIndex
// _.sortedLastIndex
// _.tail -> rest
// _.take==>take an elements from the array
// _.takeRight==>take an elements from the right
// _.takeRightWhile==>take an elements from the right
// _.takeWhile==>take an elements from the array
// _.union==>creates an array of unique values
// _.uniq==>only take unique elements
// _.unique -> uniq
// _.unzip
// _.unzipWith
// _.without==>creates an array by removing the values
// _.xor==>creates an array of unique values
// _.zip
// _.zipObject
// _.zipWith


//_.chunk(array, [size=1]) ====> syntax
//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
// const chunks=_.chunk([1,2,3,4,5],2)
// console.log(chunks)
// const  myArray=['a','b','c','d'];
// const chunks=_.chunk(myArray,3);
// console.log(chunks)


// _.compact(array)
// npm i lodash.compact==>npm package
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// const b=_.compact([1,2,0,NaN,'',false,3,null,4,5])
// console.log(b)

//_.difference(array, [values])
// npm i lodash.compact==>npm package
//Creates an array of unique array values not included in the other provided arrays using SameValueZero for equality comparisons.
// const c=_.difference([1,2,3],[3,4,5])
// console.log(c)
// const c=_.difference([4,5,6],[6,7,8])
// console.log(c)


//_.drop(array, [n=1])
// npm i lodash.drop ===> npm package
//Creates a slice of array with n elements dropped from the beginning.
// const d=_.drop([1,2,3]);
// console.log(d)
// const d=_.drop([1,2,3],2);
// console.log(d)
// const d=_.drop([1,2,3],5);
// console.log(d)
// const d=_.drop([1,2,3],0);
// console.log(d)


// _.dropRight(array, [n=1])
// npm i lodash.dropright ===>npm package
// Creates a slice of array with n elements dropped from the end.
// const e=_.dropRight([1,2,3]);
// console.log(e)
// const e=_.dropRight([1,2,3],2);
// console.log(e)
// const e=_.dropRight([1,2,3],3);
// console.log(e)
// const e=_.dropRight([1,2,3],0);
// console.log(e)


// _.dropRightWhile(array, [predicate=_.identity], [thisArg])
// var users = [
//     { 'user': 'barney', 'active': true },
//     { 'user': 'fred', 'active': false },
//     { 'user': 'pebbles', 'active': false }
// ];
// const f = _.dropRightWhile(users, { 'user': 'fred', 'active': false })
// console.log(f)
// const f = _.dropRightWhile(users, {  'active': true })
// console.log(f)


// _.dropWhile(array, [predicate=_.identity], [thisArg])
// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
//   ];
// const g=_.dropWhile(users,{'user':'barney','active':false});
// console.log(g)


// _.fill(array, value, [start=0], [end=array.length])
// Fills elements of array with value from start up to, but not including, end.
// npm i lodash.fill===>npm package
// let array=[1,2,3,4,5,6,7];
// const h=_.fill(array,3)
// console.log(h);
// const h=_.fill(array,3,7)
// console.log(h);


// _.findIndex(array, [predicate=_.identity], [thisArg])
// npm i lodash.findindex===>npm package
// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
//   ];
// const i=_.findIndex(users,{'user':'barney','active':false});
// console.log(i);
// const i=_.findIndex(users,{'user':'pebbles','active':true});
// console.log(i);
// const i=_.findIndex(users,{'active':false},'user');
// console.log(i);

// _.findLastIndex(array, [predicate=_.identity], [thisArg])
// npm i lodash.findlastindex===>npm package
// var users = [
//         { 'user': 'barney',  'active': false },
//         { 'user': 'fred',    'active': false },
//         { 'user': 'pebbles', 'active': true }
//       ];
//   const j=_.findLastIndex(users,{'user':'barney','active':false});
//   console.log(j);
// const j=_.findLastIndex(users,{'user':'fred','active':false});
// console.log(j);
// const j=_.findLastIndex(users,'active',true);
// console.log(j);

// _.first(array)
// Gets the first element of array.
// npm i lodash.first
// const array=[1,2,3];
// const k=_.first(array);
// console.log(k);

// _.flatten(array, [isDeep])
// npm i lodash.flatten==.npm package
// const array=[1,2,[3,4,[5]]]
// const l=_.flatten(array);
// console.log(l);


// _.flattenDeep(array)
// Recursively flattens a nested array.
// npm i lodash.flattendeep===>npm package
// const array=[1,2,3,[4,5,[6]]]
// console.log(_.flatMapDeep(array));

// _.indexOf(array, value, [fromIndex=0])
// Gets the index at which the first occurrence of value is found in array
// npm i lodash.indexof===>npm package
//  const array=[1,2,3,4,5]
//  console.log(_.indexOf(array,5));


// _.initial(array)
// Gets all but remove the last element of array .
// npm i lodash.initial====>npm package
// const array=[1,2,3,4,5];
// console.log(_.initial(array));

// _.last(array)
// const array=[1,2,3,4,5];
// console.log(_.last(array));

// _.lastIndexOf(array, value, [fromIndex=array.length-1])
// const array=[1,2,3,4,5,4];
// console.log(_.lastIndexOf(array,4));

// _.intersection([arrays])
// console.log(_.intersection([1, 2], [4, 2], [2, 1]));
// console.log(_.intersection([0,1],[0,2],[1,0]));

// _.zipObject(props, [values=[]])
// const array=[1,2,3,4,5]
// console.log(_.zipObject([['fred', 30], ['barney', 40]]));
// console.log(_.zipObject(['fred', 'barney'], [30, 40]));
// console.log(_.zipObject(['fred', 'barney'], [30, 40]));

// _.pull(array, [values])
// const array=[1,2,3,4,5];
// console.log(_.pull(array,2));

// _.pullAt(array, [indexes])
// const array=[1,2,3,4,5];
// console.log(_.pullAt(array,3,4))

// _.remove(array, [predicate=_.identity], [thisArg])
// const array=[1,2,3,4,5];
// console.log(_.remove(array,function(n){
//     return n%2==0
// }));
// console.log(_.remove(array));

// _.tail(array)
//   const array=[1,2,3,4,5];
//   console.log(_.tail(array));

// _.slice(array, [start=0], [end=array.length])
// const array=[1,2,3,4,5];
// console.log(_.slice(array));


// _.sortedIndex(array, value, [iteratee=_.identity], [thisArg])
// const array=[1,2,3,4,5];
// console.log(_.sortedIndex(array));

// _.sortedLastIndex(array, value, [iteratee=_.identity], [thisArg])
// const array=[1,2,3,4,5];
// console.log(_.sortedLastIndex(array));

// _.take(array, [n=1])
// console.log(_.take([1,2,3,4,5],1));

// _.takeRight(array, [n=1])
// console.log(_.takeRight([1,2,3,4,5],4));

// _.takeRightWhile(array, [predicate=_.identity], [thisArg])
// const array=[1,2,3,4,5];
// console.log(_.takeRightWhile(array,function(n){
//     return n>3
// }));
// var users = [
//     { 'user': 'barney', 'active': true },
//     { 'user': 'fred', 'active': false },
//     { 'user': 'pebbles', 'active': false }
// ];
// console.log(_.takeRightWhile(users, { 'user': 'fred', 'active': false }));
// console.log(_.takeRightWhile(users, { 'user': 'barney', 'active': true }))

// _.takeWhile(array, [predicate=_.identity], [thisArg])
// const array=[1,2,3,4,5];
// console.log(_.takeWhile(array,function(n){
//     return n<2
// }))
// var users = [
//         { 'user': 'barney', 'active': true },
//         { 'user': 'fred', 'active': false },
//         { 'user': 'pebbles', 'active': false }
//     ];
//     console.log(_.takeWhile(users, { 'user': 'barney', 'active': true }));

// _.union([arrays])
// console.log(_.union([1,2],[2,2],[4,4]));

// _.uniq(array, [isSorted], [iteratee], [thisArg])
// console.log(_.uniq([1,2,3,4,5,1]))


// _.unzip(array)
// console.log(_.zip(['akshata','mamta'],[1,2],['friend','friend']));

// _.unzipWith(array, [iteratee], [thisArg])
// const zippp=_.zip([1,2,3],[4,5,6])
// console.log(_.unzipWith(zippp))
// console.log(zippp);

// _.without(array, [values])
// const array=[1,2,3,4,5]
// console.log(_.without(array,2));

// _.xor([arrays])
// creates an array of an unique values
// console.log(_.xor([1,2],[2,3,4],[4]))


// _.zip([arrays])
// console.log(_.zip(['akshata','smitali',],[10,20]))

// _.zipObject
// console.log(_.zipObject([['fred', 30], ['barney', 40]]))


// _.zipWith([arrays], [iteratee], [thisArg])
// console.log(_.zipWith([ 11, 22 ] ,[100, 200], _.add))
// console.log(_.zipWith([1,2,3],[1,2,3],_.add))