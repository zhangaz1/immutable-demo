import * as Immutable from 'immutable';
const Map = Immutable.Map;
const List = Immutable.List;

console.log('hello word!');







// const originalMap = Map({
// 	subObject: {
// 		subKey: 'subvalue',
// 		subSubObject: {
// 			subSubKey: 'subSubValue'
// 		}
// 	}
// })

// const newMap = originalMap.setIn(['subObject', 'subKey'], 'ha ha!')
// // Map {
// //   "subObject": Map {
// //     "subKey": "ha ha!",
// //     "subSubObject": Map { "subSubKey": "subSubValue" }
// //   }
// // }

// const newerMap = originalMap.setIn(
// 	['subObject', 'subSubObject', 'subSubKey'],
// 	'ha ha ha!'
// )
// // Map {
// //   "subObject": Map {
// //     "subKey": "subvalue",
// //     "subSubObject": Map { "subSubKey": "ha ha ha!" }
// //   }
// // }
// console.log(
// 	JSON.stringify(originalMap, null, 4),
// 	JSON.stringify(newMap, null, 4),
// 	JSON.stringify(newerMap, null, 4),
// );








// const originalMap = Map({
// 	subObject: Map({
// 		subKey: 'subvalue',
// 		subSubObject: Map({
// 			subSubKey: 'subSubValue'
// 		})
// 	})
// })

// const newMap = originalMap.setIn(['subObject', 'subKey'], 'ha ha!')
// // Map {
// //   "subObject": Map {
// //     "subKey": "ha ha!",
// //     "subSubObject": Map { "subSubKey": "subSubValue" }
// //   }
// // }

// const newerMap = originalMap.setIn(
// 	['subObject', 'subSubObject', 'subSubKey'],
// 	'ha ha ha!'
// )
// // Map {
// //   "subObject": Map {
// //     "subKey": "subvalue",
// //     "subSubObject": Map { "subSubKey": "ha ha ha!" }
// //   }
// // }
// console.log(originalMap, newMap, newerMap);






// const one = Map({ a: Map({ x: 10, y: 10 }), b: Map({ x: 20, y: 50 }) })
// const two = Map({ a: Map({ x: 2 }), b: Map({ y: 5 }), c: Map({ z: 3 }) })
// const deep = one.mergeDeepWith((oldVal, newVal) => oldVal / newVal, two)
// console.log(one, two, deep)


// const one = Map({ a: Map({ x: 10, y: 10 }), b: Map({ x: 20, y: 50 }) })
// const two = Map({ a: Map({ x: 2 }), b: Map({ y: 5 }), c: Map({ z: 3 }) })
// const deep = one.mergeDeep(two)
// console.log(one, two, deep)








// const one = Map({ a: 10, b: 20, c: 30 })
// const two = Map({ b: 40, a: 50, d: 60 })
// const mw1 = one.mergeWith((oldVal, newVal) => Number(oldVal) / Number(newVal), two)
// // { "a": 0.2, "b": 0.5, "c": 30, "d": 60 }
// const mw2 = two.mergeWith((oldVal, newVal) => Number(oldVal) / Number(newVal), one)
// // { "b": 2, "a": 5, "d": 60, "c": 30 }
// console.log(one, two, mw1, mw2);



// const one = Map({ a: 10, b: 20, c: 30 })
// const two = Map({ b: 40, a: 50, d: 60 })
// const m1 = one.merge(two) // Map { "a": 50, "b": 40, "c": 30, "d": 60 }
// const m2 = two.merge(one) // Map { "b": 20, "a": 10, "d": 60, "c": 30 }
// console.log(one, two, m1, m2);





// const aMap = Map({ key: 'value' })
// const result = aMap.update(aMap => aMap.get('key'))
// console.log(aMap, result);





// const aMap = Map({ apples: 10 })
// const newMap = aMap.update('oranges', (val = 0) => val)
// console.log(aMap, newMap);




// const aMap = Map({ apples: 10 })
// const newMap = aMap.update('oranges', 0, val => val)
// console.log(aMap, newMap);





// const aMap = Map({ key: 'value' });
// const newMap = aMap.update('noKey', 'no value', value => '' + value + value);
// console.log(aMap, newMap);






// const aMap = Map({ key: 'value' });
// // const newMap = aMap.update('key', value => String(value) + String(value));
// const newMap = aMap.update('key', value => '' + value + value);
// console.log(aMap, newMap);




// const map = Map({ key: 'value' });
// const newMap = map.clear();
// console.log(map, newMap);






// const names = Map({ a: "Aaron", b: "Barry", c: "Connor" });
// const newNames = names.deleteAll(['a', 'c']);
// console.log(names, newNames);









// function sum(collection) {
// 	console.log('collection:', collection);
// 	return collection.reduce((sum, x) => sum + x, 0)
// }

// const map1 = Map({ x: 1, y: 2, z: 3 });
// const map2 = map1.map(x => Number(x) + 1);
// // .map(function (x) {
// // 	console.log('xxxxxxxxxxxxxxxxxx', arguments);
// // 	return Number(x) + 2;
// // })
// const map3 = map2.filter(x => x % 2 === 0);
// const map4 = map3.update(sum);
// const map5 = map3.reduce((sum, x) => sum + x, 0);

// console.log(map1, map2, map3, map4, map5);









// const aMap = Map({ key: 'value' });
// // const result = aMap.update(aMap => aMap);
// const result = aMap.update(aMap => aMap.get('key')) // ???
// console.log(aMap, result);








// const aMap = Map({ apples: 10 });
// const newMap = aMap.update('oranges', (val = 0) => val);
// console.log(aMap, newMap);



// const aMap = Map({ key: 'value' });
// const newMap = aMap.update('noKey', 'no value', value => value + value);
// console.log(aMap, newMap);

// const aMap = Map({ apples: 10 });
// const newMap = aMap.update('orange', 0, value => value + value);
// console.log(aMap, newMap);


// const aMap = Map({ apples: 10 });
// // const newMap = aMap.update('orange', val => 2); // ???
// // const newMap = aMap.update('orange', val => 2 * val); // ???
// // const newMap = aMap.update('orange', 3, val => 2 * val); // ???
// const newMap = aMap.update('orange', val => 2); // ???
// console.log(aMap, newMap);





// const aMap = Map({ nestedList: List([1, 2, 3]) });
// const newMap = aMap.update('nestedList', list => list.push(4));
// console.log(aMap, newMap);




// const aMap = Map({ key: 'value' });
// const newMap = aMap.update('key', value => 'xxx_' + value);
// console.log(aMap, newMap);











// const names = Map({ a: "Aaron", b: "Barry", c: "Connor" });
// const newNames = names.removeIn(['a']);

// console.log(names, newNames);










// const originalMap = Map({
// 	key: 'value',
// 	otherKey: 'other value'
// })
// console.log(originalMap);

// const newMap = originalMap.delete('otherKey');
// console.log(originalMap, newMap);






// const r1 = Map()
// 	.set(List([1]), 'listofone')
// 	.get(List([1]));
// console.log('r1:', r1);

// const r2 = Map({ key: "value" }).get('key');
// console.log('r2:', r2);

// const r3 = Map([["key", "value"]]).toObject();
// console.log('r3:', r3);


// const originalMap = Map()
// const newerMap = originalMap.set('key', 'value')
// const newestMap = newerMap.set('key', 'newer value')

// console.log('originalMap:', originalMap);
// console.log('newerMap:', newerMap);
// console.log('newestMap:', newestMap);










// var map1 = Immutable.Map({
// 	a: 1, b: 2, c: 3, obj: {
// 		name: 'zs',
// 	}
// });
// var map2 = map1.set('b', 2);
// console.assert(map1.equals(map2) === true);

// var map3 = map1.set('b', 50);
// console.assert(map1.equals(map3) === false);

// // const map4 = map1.set('obj.name', 'ww');


