
function bubbleSort(array){

    let arr = array.slice() // creating shallow copy, and making this function, pure function

    for(let i=arr.length-1; i>=1; i--){
         for(let j=0; j<i; j++){
            if(arr[j] > arr[j + 1]){
                // let temp = array[j]
                // array[j] = array[j + 1]
                // array[j + 1] = temp

                // shortcut of above 3 lines 
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
         }
    }

    return arr
}

let arr = [4,3,2,1]

console.log(bubbleSort(arr));

console.log(`Original array ${arr}`); // original array is remain same