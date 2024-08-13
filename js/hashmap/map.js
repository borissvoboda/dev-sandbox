let map = new Map();

map.set('Adam', 32);
map.set('Ben', 34);
map.set('Charlie', 31);

console.log(map);

// get element
console.log(map.get('Ben'));

// size - number of elements in the map
console.log('Size: ', map.size);

// clear the map
map.clear();
console.log('Size after clear: ', map.size);


// Danger!
// 

const myMap = new Map<string, number>();
for (const [key, value] of map) {
    
}