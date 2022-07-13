function quick(arr){
    if(arr.length < 1) return arr
    let pivot = arr[arr.length - 1]
    let rightArr = []
    let leftArr = []

    for(let el of arr.slice(0, arr.length-1)){
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }

    return [...quick(leftArr), pivot, ...quick(rightArr)]
}

let arr = [6,3,2,1]

console.log(quick(arr));