/*
1. Get 1 to 255
Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.
*/

function get_array() {
    var arr = [];
    for (var i=1;i<256;i++){
        arr.push(i);
    }
    return arr; 
}

/* 
2. Get even 1000
Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise. 
*/

function sum_even_numbers(){
    var sum = 0;
    for (var i=1;i<1001;i++){
        if(i%2===0){
        sum+=i;
        }
    }
    return sum; 
}

/*
3. Sum odd 5000 
Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
*/

function sum_odd_5000() {
    var sum = 0;
    for (var i=1;i<5001;i++){
        if(i%2!==0){
            sum+=i;
        }
    }
    return sum; 
}

/* 
4. Iterate an array
Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
*/

function iterArr(arr) {
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum; 
}