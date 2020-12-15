// function myPromise(name, email, roll){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> resolve( `Hello ${name}, your email is: ${email} and roll: ${roll}`), 1)
//     })
// }

// myPromise("Nikhil", "nikhil@gmail.com", "5").then(name=> {
//     console.log(name)
// })
// myPromise("Toslim", "toslim@gmail.com",1).then(msg=> {
//     console.log(msg)
// })
// myPromise("Mim", "mim@gmail.com", 1).then(m=> console.log(m)).then(m=> console.log("this is also" + m))


// function fetchAsync(url, timeout, onData, onError){

// }

// let fetchPromised = (url, timeout)=> {
//     return new Promise((resolve, reject)=> {
//         fetchAsync(url, timeout, resolve, reject)
//     })
// }
// Promise.all([
//     fetchPromised("http://n.nu", 500),
//     fetchPromised("http:b.nu", 404)
// ]).then(data=> {
//     let [foo, bar, baz] = data;
//     console.log(`success: foo=${foo} bar=${bar} baz=${baz}`)
// }, err=> {
//     console.log(`error: ${err}`)
// })

// let target = {
//     foo: "Welcome, foo"
// }
// let proxy = new Proxy(target, {
//     get(receiver, name){
//         return name in receiver ? receiver[name] : `Hello, ${name}`
//     }
// })
// proxy.foo === 'Welcome, foo'
// proxy.world === "Hello, world"
// proxy.name === "Nikhil"
// console.log(proxy.name)

let obj = {a: 1}
Object.defineProperty(obj, "b", {value: 20})

obj[Symbol("c")] = 200

console.log(Reflect.ownKeys(obj))