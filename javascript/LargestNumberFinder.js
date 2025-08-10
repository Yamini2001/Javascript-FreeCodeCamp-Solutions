function LargestOfAll(arr){
    let results = [];
    for(let i=0;i<arr.length;i++){
        let largest = arr[i][0];
        for(let j=1;j<arr[i].length;j++){
            if(arr[i][j]>largest){
                largest = arr[i][j];
            }
        }
        results.push(largest);
    }
    return results;
}