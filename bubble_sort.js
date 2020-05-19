const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array){
let array_length=numbers.length;
let a,b,c;
for(let i=0;i<array_length-1;i++){
  for(let j=0;j<array_length;j++){
    if(numbers[j]>numbers[j+1]){
      a=numbers[j];
      numbers[j]=numbers[j+1];
      numbers[j+1]=a;
    }
  }
}
}

bubbleSort(numbers);
console.log(numbers);