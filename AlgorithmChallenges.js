/* var use only. const/let does not work on site */

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

/*
5. Find max
Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
*/
function findMax(arr) {
    var max=arr[0];
    for (var i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max; 
}

/*
6. Find average
Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
*/

function findAvg(arr) {
    var sum=0;
    var avg=0;
    for (var i=0;i<arr.length;i++){
        sum+=arr[i];
        avg=sum/arr.length;
    }
    return avg; 
}

/*
7. Array odd
Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
*/

function oddNumbers() {
    var arr = [];
    for (var i=1;i<51;i++){
        if(i%2!==0){
            arr.push(i);
        }
    } 
    return arr; 
}

/*
8. Greater than Y
Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
*/

function greaterY(arr, Y) {
    var count=0;
    for (var i=0;i<arr.length;i++){
        if(arr[i]>Y){
            count++;
        }
    }
    return count; 
}

/*
9. Squares
Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
*/

function squareVal(arr) {
    for (var i=0;i<arr.length;i++){
    arr[i]*=arr[i];  
    }
    return arr; 
}

/*
10. Negatives
Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
*/

function noNeg(arr) {
    for (var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr; 
}

/*
11. Max/Min/Avg
Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
*/

function maxMinAvg(arr) {
    var max=arr[0];
    var min=arr[0];
    var sum=0;
    var avg=0;
    var arrnew=[];
    for (var i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        } else
        if(min>arr[i]){
            min=arr[i];
        }
        sum+=arr[i];
        avg=sum/arr.length;
        arrnew=[max,min,avg];
    }
    return arrnew; 
}

/*
12. Swap values
Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
*/
function swap(arr) {
    var arrnew = arr.slice();
    var temp = arrnew[0];
    arrnew[0] = arrnew[arrnew.length-1];
    arrnew[arrnew.length-1] = temp;
    return arrnew; 
}

/*
13. Number to string
Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
*/

function numToStr(arr) {
    for (var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return arr; 
}
