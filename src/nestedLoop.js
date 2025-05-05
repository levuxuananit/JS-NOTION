// How to use "Nested loop"
// Example of Iterating over the elements of a given array
var array = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){
        console.log(array[i][j]);
    }
}