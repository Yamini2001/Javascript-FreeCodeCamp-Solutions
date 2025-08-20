function selectionSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // find the minimum in unsorted part
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // swap
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}
