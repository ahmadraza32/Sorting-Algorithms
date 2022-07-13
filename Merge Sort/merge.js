const merge = (leftArr, rightArr) => {
    let output = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        let leftEl = leftArr[leftIndex]
        let rightEl = rightArr[rightIndex]

        if(leftEl < rightEl){
            output.push(leftEl)
            leftIndex++
        }
        else{
            output.push(rightEl)
            rightIndex++
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

function mergeSort(array){
    if(array.length === 1) return array

    let middleIndex = Math.floor(array.length / 2)
    let leftArr = array.slice(0, middleIndex)
    let rightArr = array.slice(middleIndex)

    return merge(
        mergeSort(leftArr), mergeSort(rightArr)
    )
}

let arr = [6,4,2,1]

console.log(mergeSort(arr));