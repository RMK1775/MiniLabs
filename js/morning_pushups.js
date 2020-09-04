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

function factorIt(int){
        var num_factors = [];
        let finalAnswer = '';

        for (let i = 1; i <= Math.floor(Math.sqrt(int)); i += 1)
            if (int % i === 0)
            {
                num_factors.push(i);
                if (int / i !== i)
                    num_factors.push(int / i);
            }
        num_factors.sort(function(x, y) {return x - y;});
        finalAnswer = num_factors.join(' | ')
        $('#factored').html(finalAnswer);

}

factorIt(6400);