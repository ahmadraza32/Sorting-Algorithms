
function insertion(array){
    let N = array.length;

    for(let i=1; i<N; i++){
        let key = array[i]
        let space = i

        for(let j=space-1; j>=0; j--){
            if(array[j] > key){
                array[j + 1] = array[j]
                space = j
                continue
            }
            break
        }
        array[space] = key
    }
    
    return array
}

let arr = [6,4,3,2]

console.log(insertion(arr));