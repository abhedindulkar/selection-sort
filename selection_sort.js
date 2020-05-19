const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let smallest;
  let smallest_add;
  for(let i=0;i<numbers.length;i++){
    for(let j=i;j<numbers.length-1;j++){
       if(j===i){
         if(numbers[j]<numbers[j+1]){
           smallest=numbers[j];
           smallest_add=j
         }else{
           smallest=numbers[j+1];
           smallest_add=j+1
         }
       }else{
         if(numbers[j+1]<smallest){
           smallest=numbers[j+1];
           smallest_add=j+1;
         }
       }
    }
    if(smallest!==numbers[i]){//swapping
      let temp=numbers[i];
      let temp_add=smallest_add;
      numbers[i]=smallest;
      numbers[smallest_add]=temp;
    }
    
  }
}

selectionSort(numbers);
console.log(numbers)