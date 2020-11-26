// ................ Promises Learning

// async function add(a,b){
//     if(a === b){
//         return Promise.reject(" a and b is equal")
//     } else{
//         return Promise.resolve(a + b)
//     }
// }

// add(2,2)
// .then(data=> console.log(data))
// .catch(reject=> console.log(reject + " Promise cancel"))


// ....... 
// async function add1(a,b){
//     if (a=== b){
//         return Promise.reject("A and B is equal")
//     } else{
//         return Promise.resolve(a+b)
//     }
// }

// add1(2,2)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// ..........2

// async function add2(a,b){
//     if(a===b){
//         return Promise.reject("a and b is equal")
//     } else{
//         return Promise.resolve(a+b)
//     }
// }
// add2(3,5)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))


//.......... 3 

// async function add3(a,b){
//     if(a===b){
//         return Promise.reject("a and b is equal")
//     } else{
//         return Promise.resolve(a+b)
//     }
// }
// add3(5,3)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// ......... 4 

// async function add4(a,b){
//     if(a===b){
//         return Promise.reject('a and b is equal')
//     } else if(a+b ==28){
//         return Promise.reject(" a sum b is equal 28")
//     } else{
//         return Promise.resolve(a+b)
//     }
// }
// add4(5,24)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// ......... 5 

// async function add5(a,b){
//     if(a===b){
//         return Promise.reject('a and b is equal') 
//     } else{
//         return Promise.resolve(a+b)
//     }
// }

// add5(5,23)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// async function add6(a,b){
//     if(a===b){
//         return Promise.reject('a and b is equal')
//     } else{
//         return Promise.resolve(a+b)
//     }
// }
// add6(3,2)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// async function add7(a,b){
//     if(a===b){
//         return Promise.reject('a and b is equal')
//     } else{
//         return Promise.resolve(a+b)
//     }
// }
// add7(6,3)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// async function add8(a,b){
//     if(a==b){
//         return Promise.reject('a and b is equal')
//     } else{
//         return Promise.resolve(a+b)
//     }
// } 
// add8(6,3)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))


// async function add9(a,b){
//     if(a===b){
//         return Promise.reject("a and b is equal")
//     } else{
//         return Promise.resolve(a +b)
//     }
// }
// add9(5,5)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))


// async function add10(a,b){
//     if(a > b){
//         return Promise.reject("a and b is equal")
//     } else{
//         return Promise.resolve(a + b)
//     }
// }
// add10(43,2)
// .then(res=> console.log(res))
// .catch(e=> console.log(e))



// async function just(){
//     return new Promise(function(resolve, reject){
//         if(3 == 3){
//             resolve("3 is equal 3")
//         } else{
//             reject("3 is not equal 3")
//         }
//     })
// }
// just()
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// async function just1(){
//     return new Promise(function(resolve, reject){
//         if(3===3){
//             resolve("3 is equal 3")
//         } else{
//             reject("3 is not equal 3")
//         }
//     })
// }
// just1()
// .then(res=> console.log(res))
// .catch(e=> console.log(e))


// function just2(){
//     return new Promise((resolve, reject)=> {
//         if( 3===3){
//             resolve("3 is equal 3")
//         } else{
//             reject("3 is not equal of 3")
//         }
//     })
// }
// just2()
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// function just3(){
//     return new Promise((resolve, reject)=> {
//         if(3===3){
//             resolve("3 is equal of 3")
//         } else{
//             reject("3 is not equal of 3")
//         }
//     })
// }
// just3()
// .then(res=> console.log(res))
// .catch(e=> console.log(e))


// function just4(){
//     return new Promise((resolve, reject)=> {
//         if(3===3){
//             resolve("3 is equal of 3")
//         } else{
//             reject("3 is not equal of 3")
//         }
//     })
// }
// just4()
// .then(res=> console.log(res))
// .catch(e=> console.log(e))

// async function just5(){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve("Hello world")
//         },3000)
//     })
// }
// console.log(just5())

async function just6(){
    return new Promise((resolve,reject)=> {
        if(4===3){
            resolve("3 is equal of 3")
        } else{
            console.log("3 is not equal of 3")
        }
    })
}

// (async ()=> {
//     let data = await just6()
//     console.log(data)
// })()


(async()=>{
   try{
       let data = await just6()
       console.log(data)
   } 
   catch(e){
       console.log(e)
   }
})()