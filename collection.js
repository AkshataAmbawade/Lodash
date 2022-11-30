const _=require('lodash');

// _.countBy
// _.each -> forEach===>Iterates over elements of collection
// _.eachRight -> forEachRight==>This method is like _.each except that it iterates over elements of collection from right to left.
// _.every
// _.filter==>Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
// _.find==>Iterates over elements of collection, returning the first element predicate returns truthy for. 
// _.findLast==>This method is like _.find except that it iterates over elements of collection from right to left.
// _.flatMap==>Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results.
// _.flatMapDeep==>This method is like _.flatMap except that it recursively flattens the mapped results.
// _.flatMapDepth==>This method is like _.flatMap except that it recursively flattens the mapped results up to depth times.
// _.forEach==>Iterates over elements of collection
// _.forEachRight==>This method is like _.forEach except that it iterates over elements of collection from right to left.
// _.groupBy
// _.includes==>Checks if value is in collection. 
// _.invokeMap==>can give condition like 'sort' String.prototype.split,''
// _.keyBy==>Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
// _.map==>Creates an array of values by running each element in collection thru iteratee.
// _.orderBy==>This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by.
// _.partition==>Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).
// _.reduce==>Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee,
// _.reduceRight==>This method is like _.reduce except that it iterates over elements of collection from right to left.
// _.reject==>The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.
// _.sample==>Gets a random element from collection.
// _.sampleSize==>Gets n random elements at unique keys from collection up to the size of collection
// _.shuffle==>Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
// _.size==>Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
// _.some==>Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. 
// _.sortBy==>Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee.




// console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
// const func=_.forEach([1, 2], function(value) {
//     console.log(value);
//   });

//  const func=_.each([1,2,3,4,5],function(value){
//     console.log(value);
//  })

// const func=_.eachRight([1,2,3,4,5],function(value){
//     console.log(value);
// })

// Predicate functions only return truthy or falsy values

// console.log(_.every([true, 1,null,'yes']))
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
//   console.log(_.every(users, { 'user': 'barney', 'active': false }));
//   console.log(_.every(users,  { 'user': 'barney', 'age': 36, 'active': false }));
//   console.log(_.every(users, ['active', false]));


// console.log(_.filter(users,function(o){return !o.active}));
// console.log(_.filter(users,{ 'age': 36, 'active': true}));
// console.log(_.filter(users,['active',false]));
// console.log(_.filter(users,'active'));

var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
 
//   console.log(_.find(users,function(obj){
//     return obj.age>1
//   }));
// console.log(_.find(users,{'age':36, 'active':true}));
// console.log(_.find(users,['active',false]));/
// console.log(_.find(users,'active'));

// console.log(_.findLast(users,function(obj){
//     return obj.age>1
// }));
// console.log(_.findLast([1,2,3,4,5],function(obj){
//     return obj%2==0
// }));
// console.log(_.flatMap([1,2,3,4,5],function(n){
//     return n+1
// }));
// console.log(_.flatMap([1,2,3,4,5,6,7,8,9],function(value){
//     return value%2!=0
// }));
// console.log(_.flatMap([1,2,3,4,5,6,7,8,9],function(n){
//     return n%2!=0
// }));
// console.log(_.flatMap([1,2,3,4,5,6,7,8,9],function(value){
//     return value%2==0
// }));
// console.log(_.flatMap([1,2,3,4,5,6,7,8,9],function(value){
//     return value*2
// }));
// console.log(_.flatMap([1,2,3,4,5],function(e){
//     return [[e+1]]
// }));
// console.log(_.flatMapDeep([1,2,3,4,5],function(e){
//     return [[e+1]]
// }));
// console.log(_.flatMapDepth([1,2,3,4,5],function(e){
//     return [[e+1]]
// },2));

// const func=_.forEach([1,2,3,4,5],function(value){
//     console.log(value);
// })
// const func=_.forEachRight([1,2,3,4,5],function(num){
//     console.log(num);
// })

// console.log(_.includes([1,2,3,4,5],1));
// console.log(_.includes([1,2,3,4,5],true));

// console.log(_.invokeMap([[9,8,7],[6,5,4]],'sort'));
// console.log(_.invokeMap([[123],[456]],String.prototype.split,''));

var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
  ];
//   console.log(array,function(o){
//     return String.fromCharCode(o.code)
//   });
//   console.log(_.keyBy(array, function(o) {
//     return String.fromCharCode(o.code);
//   })
//   );

// console.log(_.keyBy(array,function(o){
//     return String.fromCharCode(o.code)
// }));
// console.log(_.keyBy(users,'dir'));
// console.log(_.map([1,2,3,4,5],function(n){
//     return n*n
// }));

// var users = [
//     { 'user': 'fred',   'age': 48 },
//     { 'user': 'barney', 'age': 34 },
//     { 'user': 'fred',   'age': 40 },
//     { 'user': 'barney', 'age': 36 }
//   ];
// console.log(_.orderBy(users,['user','age']));  
// console.log(_.orderBy(users,['user','age'],['desc']));

// var users = [
//     { 'user': 'barney',  'age': 36, 'active': false },
//     { 'user': 'fred',    'age': 40, 'active': true },
//     { 'user': 'pebbles', 'age': 1,  'active': false }
//   ];
//   console.log(_.partition(users,function(n){
//     return n.active
//   }));
// console.log(_.partition(users,{'age':1,'active':false}));
// console.log(_.partition(users,['active',false]));
// console.log(_.partition(users,'active'));

// console.log(_.reduce([1,2],function(sum,n){
//     return sum+n
// },0));
// console.log((_.reduce([5,4,3,2,1],function(sub,n){
//     return sub-n
// })));
// console.log(_.reduceRight([1,2,3,4,5],function(sum,n){
//     return sum+n
// }));
// console.log(_.reduceRight([1,2,3,4,5],function(sub,n){
//     return sub-n
// }));
// console.log(_.reduceRight([5,4,3,2,1],function(sub,n){
//     return sub-n
// }));
var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true }
  ];
//   console.log(_.reject(users,function(n){
//     return !n.active
//   }));
// console.log(_.reject(users,{'user':'barney','age':36}));
// console.log(_.reject(users,['active',false]));
// console.log(_.reject(users,'active'));
// console.log(_.sample([1,2,3,4,5]));
// console.log(_.sample([1,2,3,4,5]));

// console.log(_.sampleSize([1,2,3,4,5],3));
// console.log(_.sampleSize([1,2,3,4,5],3));
// console.log(_.shuffle([1,2,3,4,5]));
// console.log(_.shuffle([1,2,3,4,5]));

// console.log(_.size([1,2,3,4,5,6,7,8,9,0]));
// console.log(_.size([1]));

// var users = [
//     { 'user': 'barney', 'active': true },
//     { 'user': 'fred',   'active': false }
//   ];

//   console.log(_.some([null,false,0,"",undefined,NaN]));
//   console.log(_.some([null,1,false,0,"",undefined,NaN]));

// console.log(_.some(users,{'user':'barney','active':false}));
// console.log(_.some(users,{'user':'barney','active':true}));
// console.log((_.some(users,['active',false])));
// console.log(_.some(users,['active',true]));
// console.log(_.some(users,'active'));


// var users = [
//     { 'user': 'fred',   'age': 48 },
//     { 'user': 'barney', 'age': 36 },
//     { 'user': 'fred',   'age': 40 },
//     { 'user': 'barney', 'age': 34 }
//   ];
//   console.log(_.sortBy(users,function(n){
//     return n.user
//   }));
//   console.log(_.sortBy(users,['user','age']));