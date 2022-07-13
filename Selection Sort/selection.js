
function selection(array){
    let arr = array.slice() // creating shallow copy, pure function

    for(let i=0; i<arr.length-1; i++){
        let min_index = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[min_index] > arr[j]){
                min_index = j
            }
        }
        [arr[min_index], arr[i]] = [arr[i], arr[min_index]]
    }

    return arr
}

let arr = [6,3,4,5,2,1]
console.log(selection(arr));

console.log(`original arr ${arr}`);