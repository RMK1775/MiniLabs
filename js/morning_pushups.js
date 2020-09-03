function average(arr){
    let answer = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number")
        answer += arr[i];
    }
    return answer/arr.length;
}

const testData = [3,4,56,70]

console.log(average(testData));