const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let length=array.length;
  let left=array.slice(0,Math.floor(length/2));
  let right=array.slice(Math.floor(length/2),length)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  let array = [];
  let i = 0, j = 0;
  while (i < left.length || j < right.length) {
    if (left[i] < right[j]) {
      array.push(left[i]);
      // console.log(i,left[i],"i")
      i++
    } else {
      // console.log(j,right[j],"j")

      array.push(right[j]);
      j++;
    }
    if (j === right.length) {
      // console.log("j===")
      while (i < left.length) {
        array.push(left[i]);
        i++
      }
    } else if (i === left.length) {
      // console.log("i===")

      while (j < right.length) {
        array.push(right[j]);
        j++
      }
    }
  }
  return array;

}

const answer = mergeSort(numbers);
// console.log(merge([2,4,55],[6,77,99]));
console.log(answer);