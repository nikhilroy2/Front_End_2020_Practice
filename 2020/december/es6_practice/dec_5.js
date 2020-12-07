
// Object.defineProperty(typeof global === "object" ? global : window, "nikhil", {
//     value:        3.141593,
//     enumerable:   true,
//     writable:     false,
//     configurable: false
// })
// console.log(nikhil)

// const obj = {
//     name: "Nikhil"
// }
// Object.defineProperties( true, {
//     value: obj,
//     enumerable: true,
//     writable: false,
//     configurable: false
// })

const name = ["Nikhil", "Sonchoy", "Shanto"]

const result = name.map(v=> ({nam: v}))

console.log(result)