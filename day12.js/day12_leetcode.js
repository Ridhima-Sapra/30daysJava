//ques 1
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let curr=x;
        for(let i=functions.length-1; i>=0;i--){
             let func=functions[i];
             curr=func(x);
             x=curr;
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


//ques2
var once = function(fn) {
    
    let counter = 0;
    return function(...args){
        if(counter ===0){
            counter +=1;
            return fn(...args);
        }
    }

    
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
