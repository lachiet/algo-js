/**
 * Bubble sort: T = O(n^2), S = O(1)
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

/**
 * Selection sort: T = O(n^2), S = O(1)
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let t = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = t;
    }
  }
  return arr;
}

/**
 * Merge sort: T = O(n log n), S = O(n)
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

/**
 * Quicksort: T = O(n log n), S = O(log n)
 */
function quickSort(arr, left = 0, right = null) {
  if (right === null) right = arr.length - 1;

  if (arr.length > 1) {
    let index = quickSortPartition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

function quickSortPartition(arr, left, right) {
  const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left; // random pivot index
  const pivot = arr[pivotIndex];
  let i = left;
  let j = right;

  // Swap element on either side of pivot point
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      let temp = arr[i]; // swap
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return i;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge, quickSort };
