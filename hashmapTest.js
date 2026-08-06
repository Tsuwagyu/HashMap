import HashMap from "./hashmap.js";
const test = new HashMap();

console.log(test);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("length:", test.length());
console.log("capacity:", test.capacity);
console.log("load:", test.length() / test.capacity);
// load test should not resize

test.set("apple", "green");
test.set("banana", "brown");
test.set("lion", "yellow");
// overwriting values should not create new entries or resize map
console.log(test.get("apple"));
console.log(test.get("banana"));
console.log(test.get("lion"));
console.log("length:", test.length());
console.log("capacity:", test.capacity);

// 13th entry to increase capacity

test.set("moon", "silver");

console.log("length:", test.length());
console.log("capacity:", test.capacity);
console.log("load:", test.length() / test.capacity);

//overwrite values after resizing 

test.set("carrot", "purple");
test.set("dog", "black");
test.set("moon", "white");

console.log(test.get("carrot"));
console.log(test.get("dog"));
console.log(test.get("moon"));
console.log("length:", test.length());
console.log("capacity:", test.capacity);

// test has and remove after resizing

console.log(test.has("apple")); // true
console.log(test.has("spaceship")); // false

console.log(test.remove("banana")); // true
console.log(test.remove("banana")); // false

console.log(test.has("banana")); // false
console.log(test.get("banana")); // null
console.log("length:", test.length());
console.log("capacity:", test.capacity);
// test collection methods

console.log("keys:", test.keys());
console.log("values:", test.values());
console.log("entries:", test.entries());

console.log("keys length:", test.keys().length);
console.log("values length:", test.values().length);
console.log("entries length:", test.entries().length);

// clear method test

test.clear();

console.log("length:", test.length());
console.log("keys:", test.keys());
console.log("values:", test.values());
console.log("entries:", test.entries());
console.log("capacity:", test.capacity);