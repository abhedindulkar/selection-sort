const numbers = [44, 99, 6, 2, 1, 5, 63, 87, 283, 4, 0];
                       
function insertionSort(array) {
  let temp;
  let smallest;
  for(let i=1;i<numbers.length;i++){
    if(numbers[i]<numbers[i-1]){
       for(let j=i-1;j>=0;j--){
          if(numbers[j+1]<numbers[j]){
             temp=numbers[j+1];
             numbers[j+1]=numbers[j];
             numbers[j]=temp;
          }else{
            
            break;
            console.log("hii")
          }
    }
    }
   
  }
}

insertionSort(numbers);
console.log(numbers);