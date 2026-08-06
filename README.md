# HashMap

A custom HashMap implementation built with JavaScript as part of The Odin Project.

The HashMap uses an array of buckets and linked lists to handle hash collisions. It automatically increases its capacity when the load factor is exceeded.

## Features

- Add and update key-value pairs
- Retrieve values by key
- Check whether a key exists
- Remove entries
- Count stored entries
- Return all keys, values, or entries
- Clear the HashMap
- Automatically resize and rehash entries

## Methods

- `set(key, value)`
- `get(key)`
- `has(key)`
- `remove(key)`
- `length()`
- `clear()`
- `keys()`
- `values()`
- `entries()`

## Usage

```js
import HashMap from "./hashmap.js";

const map = new HashMap();

map.set("apple", "red");
map.set("banana", "yellow");

console.log(map.get("apple")); // red
console.log(map.has("banana")); // true
console.log(map.length()); // 2

map.remove("apple");

console.log(map.entries()); // [["banana", "yellow"]]