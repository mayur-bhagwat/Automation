/*
//callback
function sum(a, b) {
    console.log(a+b);
}

function calculator(a,b, sumCallback) {
   sumCallback(a,b);
}

calculator(1, 2, sum);
*/



/*
//Callbackhell - Nested callbacks
function getData (dataId, getNextData){
setTimeout( () => {
    console.log("data", dataId);
    if(getNextData){
        getNextData();
    }
    
}, 2000);
}

getData(1, () =>{
    console.log("getting data 2........");
    getData(2, () =>{
        console.log("getting data 3........");
        getData(3, () =>{
            console.log("getting data 4........");
            getData(4)})})});
*/


/*
//Promises
let promise = new  Promise( (resolve, reject) => {
    console.log("I am a promise");
    resolve("Jawa Adventure");
});
*/

/*
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
               getNextData();
            }
        }, 6000)
    })
}
    */

/*
const getPromise = () => {
    return new  Promise( (resolve, reject) => {
    console.log("I am a promise");
    resolve("Jawa Adventure");
});
}

let promise = getPromise();
promise.then( (res) =>{
    console.log("promise fulfilled", res);
});

promise.catch( (err) =>{
    console.log("rejected", err);
}
);
*/




/*
function asyncFunc1() {
    return new Promise( (resolve, reject) =>{
         setTimeout( () => {
            console.log("data1");
            resolve("success");
         }, 5000);
    })
}

function asyncFunc2() {
    return new Promise( (resolve, reject) =>{
         setTimeout( () => {
            console.log("data2");
            resolve("success");
         }, 5000);
    })
}


console.log("fetching Data1");
let p1 = asyncFunc1();
p1.then( (res) =>{
   console.log(res);    
})

console.log("fetching Data2");
let p2 = asyncFunc2();
p2.then( (res) =>{
   console.log(res);    
})
*/

//promise chaining





//Async-Await

async function hello(){
    console.log("hello");
}


function api(){
    return new Promise( (resolve, reject) =>{
        setTimeout( () =>{
            console.log("weather data");
        resolve(200);
        },2000)
    });
    }

 async function getWeatherData(){
    await api();  //1st 
    await api();  //2st 
 } 
 
 //IIFE : Immediately invoked function expression
(async function () {
    console.log("getting data1....");
    await getWeatherData(1);
    console.log("getting data2....");
    await getWeatherData(2);
    console.log("getting data3....");
    await getWeatherData(3);
}) ();