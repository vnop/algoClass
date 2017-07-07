/*
SELECTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.

example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

*** Exercises

- Implement selection sort
- Identify time complexity

Stable Variant
- Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

- Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?

*/

// var selectionSort = function(array) {
//   let sortedArray = [];
//   let unsortedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let current = array[i];
//     let previous = array[i - 1];
//     if (current < previous) {
//       sortedArray = array.slice(0, i - 1);
//       unsortedArray = array.slice(i - 1);
//       break;
//     }
//   }
//   while (unsortedArray.length > 0) {
//     let min = unsortedArray.indexOf(Math.min(...unsortedArray));
//     sortedArray.push(unsortedArray.splice(min, 1)[0]);
//   }
//   return sortedArray;
// };
// Time complexity: O(n^2)

var selectionSort = function(array, comparator) {
  comparator = comparator || defaultComparator;
  array.forEach(function(element, index) {
    let minValue = element;
    let minIndex = index;
    for (let i = index; i < array.length; i++) {
      if (comparator(array[i], minValue) < 0) {
        minValue = array[i];
        minIndex = i;
      }
    }
    array = swap(array, index, minIndex);
  });
  return array;
};

function swap (arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function defaultComparator (a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
