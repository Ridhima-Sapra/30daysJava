/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// Q1
var filter = function(arr, fn) {
    let res=[];
    for(let i=0;i<arr.length;i++){
        let n=arr[i]
        if (fn(n,i)){
            res.push(n);
        }
    }
    return res;
     
};
// Q2

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let answer=init;
    for(let i=0;i<nums.length;i++){
        answer= fn(answer,nums[i]);
    }
    return answer;
};