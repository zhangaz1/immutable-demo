import * as Immutable from 'immutable';
console.log('hello word!');

var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
var map2 = map1.set('b', 2);
console.assert(map1.equals(map2) === true);
var map3 = map1.set('b', 50);
console.assert(map1.equals(map3) === false);