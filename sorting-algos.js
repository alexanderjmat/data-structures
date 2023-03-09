const arr = [15, -95, -90, 14, -96, 11, 77, -84, 32, -57];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
  }
  return array;
}

function optimizedBubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

[99, 2, 1, 3, 4];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array);
    let smallest = array[i];
    let smallestIdx = i;
    let current = array[i];
    for (let j = i; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        smallestIdx = j;
      }
    }
    array[i] = smallest;
    array[smallestIdx] = current;
  }
  return array;
}

//merge sort

function merge(left, right) {
  const mergedArray = [];
  let a = 0;
  let b = 0;

  while (a < left.length && b < right.length) {
    if (left[a] < right[b]) {
      mergedArray.push(left[a]);
      a++;
    } else {
      mergedArray.push(right[b]);
      b++;
    }
  }

  while (a < left.length) {
    mergedArray.push(left[a]);
    a++;
  }
  while (b < right.length) {
    mergedArray.push(right[b]);
    b++;
  }

  return mergedArray;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

module.exports = {
  arr,
  bubbleSort,
  optimizedBubbleSort,
  selectionSort,
  merge,
  mergeSort,
};
