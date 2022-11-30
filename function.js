const _=require('lodash');

// console.log(_.map(['6', '8', '10'], _.ary(parseInt, 0)));

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  console.log(_.findIndex(users,{'user':'pebbles'}));