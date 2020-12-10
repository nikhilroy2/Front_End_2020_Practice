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


function quux (strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}
quux`foo\n${ 42 }bar`
console.log()
String.raw`foo\n${ 42 }bar` === "foo\\n42bar"
console.log(0b111110111)


let person = ['nikhil', 'sonchoy',30,40];
person.sort().splice(4)
let p_result = person.map((name,i)=> ({name}))
console.log(p_result)


{
    const quux = ()=> "b"
let obj_1 = {
    name: "nikhil",
    ["a"+quux()] : "Array"
}

console.log(obj_1.ab);
}