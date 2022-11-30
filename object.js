const _=require('lodash')
var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };
//   console.log(_.findKey(users,function(n){
//     return n.age>36
//   }));
//   console.log(_.findKey(users,{'age':1}));
// console.log(_.findKey(users,['active',true]));
// console.log(_.findKey(users,'active'));

// console.log(_.findLastKey(users,function(n){
//     return n.age>36
// }));
// console.log(_.findLastKey(users,['active',true]));

// const object=({ 'a': _.create({ 'b': 2 }) })
// console.log(_.hasIn(object,'b'));
// var object = { 'a': 1, 'b': 2, };
// console.log(_.invert(object));
// const obj={'akshata':1,'smitali':2}
// console.log(_.invert(obj));


// var object = { 'a': 1, 'b': 2, 'c': 1 };
// console.log(_.invertBy(object));
// console.log((_.invert(object)));

// function foo(){
//     this.a=1,
//     this.b=2

// }
// foo.prototype.c=3
// console.log(_.keys(new foo));
// console.log(_.keys('abcde'));
// console.log(_.keysIn(new foo));
// console.log(_.values(new foo));
// console.log(_.valuesIn(new foo));

// console.log(_.mapKeys({'a':1,'b':2},function(keys,value){
//     return keys+value
// }));
// console.log(_.mapValues({'a':1,'b':2},function(keys,values){
//     return keys+values
// }));

// const obj1={'a':[1]}
// const obj2={'b':[2]}
// console.log(_.merge(obj1,obj2));
// function customizer(objValue, srcValue) {
//     if (_.isArray(objValue)) {
//       return objValue.concat(srcValue);
//     }
//   }
   
//   var object = { 'a': [1], 'b': [2] };
//   var other = { 'a': [3], 'b': [4] };
//   console.log(_.mergeWith(object,other,customizer));

// var flipped = _.flip(function() {
//   console.log(  _.toArray(arguments));
//   });
//   flipped(1,2,3,4,5)
  

//   var object = { 'a': 1 };
// var other = { 'a': 1 };
// console.log(_.eq(object,other));
// console.log(_.isEqual(object,other));
// console.log(_.eq('a','a'));
// console.log(_.isNil(undefined));
// console.log(_.isNull(undefined));
// console.log(_.isNull(null));

// const ob1=[1]
// const ob2=[2]
// console.log(_.concat(ob1,ob2));

// console.log(_.join([1,2,3],'-'));
// console.log(_.slice([1,2,3,4],3));
// console.log(_.now());
// console.log(_.times(9));
// console.log(_.zip([1,10,100],[2,20,200]));
// console.log(_.unzip((_.zip([1,10,100],[2,20,200]))));
// console.log(_.reduce([1,2,3,4,5],function(sum,a){
//     return sum+a
// }));

// console.log(_.sum([1,2,3]));
// console.log(_.add(0,1));
// console.log(_.sum([1,2,3,4,5]));
// console.log(_.hasIn([1,2,3,4,5],3));

// function foo(){
//     this.a=1,
//     this.b=2
// }
// foo.prototype.c=3
// console.log(_.keys(new foo));
// console.log(_.values(new foo));
// console.log(_.valuesIn(new foo));
// console.log(_.escape('hello & bye'))
// console.log(_.unescape('hell &amp bye'));
// console.log(_.split([1,2,3,4,5],4));
// console.log((_.words('akshata ,smitali,swarupa')));
