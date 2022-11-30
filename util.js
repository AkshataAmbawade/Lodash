const _=require('lodash')

// console.log(_.range(10));
// console.log(_.times(3,String));
var objects = [
    { 'a': { 'b': 2 } },
    { 'a': { 'b': 1 } }
  ];

  console.log(_.map(objects,_.property('a.b')));