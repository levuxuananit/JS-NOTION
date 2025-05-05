// Example
// Input: array [1,2,3,4,1,2,3,4,1,2,3,4]
// Output: array [1,2,3,4]
// Note: No use loop

array = [1,2,3,4,1,2,3,4];
console.log(...new Set(array))

// Explain:
// - "new Set(array)"creates unique elements in the array;
// - "... new Set(array)" convert set to array.