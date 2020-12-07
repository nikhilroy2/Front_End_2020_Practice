function num(x,y, ...z){
    let a = Array.prototype.slice.call(arguments, 3)
  return    a;
}

console.log(num(14,54,44,22));

let txt = "Hello World"

console.log([...txt])
console.log([...txt])
console.log([...txt])
console.log(txt.split('').toString())
console.log([...txt].toString())
console.log([...txt].slice(-3))
console.log([...txt].splice(3))

let name = 'Linkedin'
console.log([...name].toString()) // es6
console.log(name.split('').toString())// es5