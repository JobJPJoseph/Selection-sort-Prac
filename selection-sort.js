

function selectionSort(arr) {

  const findMin = (array) => {
    let idx = 0 ;
    let num = array[0];

    for (let i = 1; i < array.length; i++) {
      let elem = array[i];

      if (elem < num) {
        num = elem;
        idx = i;
      }

    }

    return idx;
  }

  // Copy the original array
  let unsorted = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while(unsorted.length) {
    // Do not move this console.log
    console.log(sorted.join(","));
    // Find the index of the minimum value in the unsorted half
    let idx = findMin(unsorted); // We need to get the idx
    // Save and remove the value at the min index
    result = unsorted.splice(idx, 1)
    // Add the min value to the end of the sorted array
    sorted.push(...result);
  }

  return sorted;
}



function selectionSortInPlace(arr) {

  const findMin = (array, wallIdx) => {
    let idx = wallIdx;
    let num = array[wallIdx];

    for (let i = wallIdx; i < array.length; i++) {
      let elem = arr[i];

      if (elem < num) {
        num = elem;
        idx = i;
      }

    }

    return idx;
  }

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let i = 0;
  // Repeat while the unsorted half is not empty:
  while (i < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let idx = findMin(arr, i);
    // Save the min value
    let num = arr[idx];
    // Shift every unsorted value to the left of the min value to the right by 1
    while (idx > 0 && arr[idx - 1] > num) {
      arr[idx] = arr[idx - 1];
      idx--;
    }
    // Put the min value at the divider
    arr[idx] = num;
    // Increment the divider and repeat
    i++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
