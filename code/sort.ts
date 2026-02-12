// Bubble Sort O(N^2)

function bubbleSort(items: number[]): number[] {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
        swapped = true;
      }
    }
  }

  return items;
}

//Quick Sort

function quickSort(arr: number[]): number[] {
  const length = arr.length;
  if (length <= 1) return arr;

  const pivot = arr[0];
  const bigger = [];
  const lesser = [];

  for (let i = 1; i < length; i++) {
    if (arr[i] > pivot) {
      bigger.push(arr[i]);
    } else {
      lesser.push(arr[i]);
    }
  }

  return [...quickSort(lesser), pivot, ...quickSort(bigger)];
}

//Merge Sort

function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const listHalf = Math.floor(arr.length / 2);
  const subList1 = arr.slice(0, listHalf);
  const subList2 = arr.slice(listHalf, arr.length);

  return merge(mergeSort(subList1), mergeSort(subList2));
}

function merge(list1: number[], list2: number[]) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      result.push(list1[i]);
      i++;
    } else {
      result.push(list2[j]);
      j++;
    }
  }

  return result.concat(list1.slice(i), list2.slice(j));
}
