// ACTIVITY 1
//TASK 1 : Create an array 1 to 5 and console
const arr=[1,2,3,4,5];
console.log(arr);

//TASK 2: Acess the first and last element and console
console.log(arr.at(0)); // OUTPUT : 1
console.log(arr.at(-1)); // OUTPUT : 5

 //ACTIVITY 2 : ARRAY METHODS (basic)
 //TASK 3:  Push method to add new element to array and log the new array to console
let brr=[7,5,7,8];
brr.push(10);
console.log("updated array after pushing is : ",brr);
//output : updated array after pushing is : [7, 5, 7, 8, 10]

//task 4 : pop method to remove last element from array and log the updated array to console
let crr=[7,5,7,8];
t=crr.pop();
console.log("updated array after popping is : ",crr);
console.log("removed element is : ",t);
//output : updated array after popping is : [7, 5, 7]
//output :removed element is :  8

//task 5 : shift method to remove first element from array and log the updated array to console
let drr=[7,5,7,8];
drr.shift();
console.log("updated array after shifting is : ",drr);
//output : updated array after shifting is :  [5, 7, 8]

//task 6 : unshift method to add element to beginning and log new array to console
drr.unshift(34567);
console.log("updated array after unshifting is : ",drr);
// OUTPUT : updated array after unshifting is :  [34567, 5, 7, 8]
// ACTIVITY 3 : ARRAY METHODS 

//task 7 : use map to create a new array in which every element get double
let err=[1,2,3,4,5];
let frr= err.map((a)=>{
    return 2*a;
});
console.log("new array is : ",frr);
 //output: new array is :  [2, 4, 6, 8, 10]

 //task 8 : use filter to create a new array which contains only even number of previous array
 let grr=[2,7,6,9,3,0,1]
 let hrr=grr.filter((a)=>{
    return a%2==0;
 })
 console.log("new array is : ",hrr);
 //output : new array is : [2, 6, 0]

 
//task 9 : use reduce to sum all elements of array and log it to console
let irr=[1,2,3]
let sum=0;
let jrr=irr.reduce((sum,a)=>{
    return sum+=a;
})
console.log("array sum is : ",jrr);
 //output : array sum is : 6

 //ACTIVITY 4 : ARRAY ITERATION

//task 10 : for loop to iterate the array 
let arr11 = [9,8,7,6,5];
console.log("Elements of array are :");
for(let i=0;i<arr11.length;i++){
    console.log(arr11[i]);
}

/* output : Elements of array are :
9
8
7
6
5
*/
//task 11 : forEach method to iterate over the array

let arr12 = [3,3,1,3,9,7];
console.log("Elements of array are :");
arr12.forEach((a)=>{
    console.log(a);
});

/* ouput : Elements of array are :
3
3
1
3
9
7
*/
//ACTIVITY 5 : MULTIDIMENSIONAL ARRAY

// task 12 : create a 2D array and log array to console
 let TwoD_arr=[[15,26,37],[49,58,67],[74,86,90]];
 console.log("Elements of array are :\n");
 for(let i=0;i< TwoD_arr.length;i++){
      str=""
     for(let j=0;j<TwoD_arr[0].length;j++){
        str=str+TwoD_arr[i][j]+" ";
     }
 
 console.log(str);
}
 //output: Elements of array are :

// 15 26 37 
// 49 58 67 
// 74 86 90
 //task 13 : access and log a specific element

 console.log("element in second row and third column in array",TwoD_arr,"is :",TwoD_arr[1][2]);

 //output : element in second row and second column in array [15,26,37],[49,58,67],[74,86,90]] is : 5