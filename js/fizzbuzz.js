// for(i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0) console.log(i + " Fizz Buzz!");
//     if(i % 3 == 0 && i % 5 != 0) console.log(i + " Fizz!");
//     if(i % 3 != 0 && i % 5 == 0) console.log(i + " Buzz!");
//     if (i % 3 != 0 && i % 5 != 0) console.log(i)
// }

// let count = 1;
// let interval = 2000;
// let intervalID = setInterval(myFunc, interval);
// function myFunc(){
//     if(count <= 5){
//         alert("Some");
//         count++;
//     }
// }


// var delay = 5000; // delay time in milliseconds
// var timeoutId = setTimeout(function () {
// alert('Here is a delayed hello!');
// }, delay);
// // to cancel the timeout, you can call
// clearTimeout(timeoutId);
// // prior to the delay expiring
// var delay2 = 6000;
// var to2 = setTimeout(function () {
// clearTimeout(timeoutId);
// alert('Stopped alerts!');
// }, delay2);

function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 15 === 0){
            console.log("Fizzbuzz");
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else {
            console.log(i)
        }
    }
}

const fizzBuzz2 = (num) => {
    for(let i = 1; i <= num; i++){
        if(i % 15 === 0)
            console.log(`fizzbuzz`)
        else if (i % 5 === 0)
            console.log(`buzz`)
        else if (i % 3 === 0)
            console.log(`fizz`)
        else
            console.log(`${i}`)
    }
}

//fizzBuzz(30);
fizzBuzz2(20);