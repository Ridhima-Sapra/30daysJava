/*// Activity-1: Understanding Promises

// Task-1: Promise that resolves with a message
let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this is a message for resolve");
    })
})
promise.then((msg)=>{
    console.log(msg);
})

// Task-2: Promise that rejects with an error message
let promiseError= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error occured");
    })
})
promiseError.catch((msg)=>{
    console.log(msg);
})

// Activity-2: Chaining Promises

// Task-3: Sequence of promises that simulate fetching data from the server in a specific order
const Fetchdata= (data)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data ",data);
        resolve("All data are consoled to log");
    },2000)
});
};
console.log("fetching data 1");
Fetchdata(1).then((res)=>{
    console.log("fetching data 2");
    return Fetchdata(2);
}).then((res)=>{
    console.log("fetching data 3");
    return Fetchdata(3);
}).then((res)=>{
    console.log(res);
})

//output
/*fetching data 1
data  1
fetching data 2
data  2
fetching data 3
data  3
All data are consoled to log*/
//ACTIVITY 3 : USING ASYNC AND AWAIT
*/
//task 4 : Write an async function that waits for a promise to resolve and then logs the resolved value
function waitPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("call is made");
        },2000)
    })
}
async function waitPromise(){
    console.log("function call 1");
    await waitPromise();
    console.log("function call 1");
    await waitPromise2();
    console.log("function call 3");
}
//task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message
/*let func=()=>{
    return new Promise((resolve,reject)=>{
            reject("some error occured");
    })
}
(async function(){
    try{
        await func();
    }
   
    catch(err){
        console.log(err);
    }
})();
//output : some error occured
//ACTIVITY 4 

//task 6 :  Fetching data from an API

const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Fergana';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

const funn = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(url,options).then((msg)=>{
            msg.json().then((data)=>{
            resolve(data);
            })
        })
    })
}

funn().then((msg)=>{
    console.log(msg);
})
//Task 7 : Use the fetch API to get data from public api and log the response data to the console using promises


(async function(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    })()
    
    
//Activity 5 Concurrent Promises
    
//Task 8 : Use Promise.all to wait for multiple promises to resolve and then logs the resolved value

function asyncFunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("successfull");
        },4000);
    });
};

const a=fun();
const b=asyncFunc3();
Promise.all([a,b]).then((values)=>{
    console.log(values);
});
//output
//[ 'successfully executed', 'successfull' ]

//Task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises
Promise.race([a,b]).then((values)=>{
    console.log(values);
});*/