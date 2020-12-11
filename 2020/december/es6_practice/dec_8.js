// Destructuring Asignment.

var list = [1,2,3]
var [a,b,c] = [...list]

console.log()


const arr = ["Nikhil", "Sonchoy", "Toslim"];

const [x,...z] = arr;
console.log(z)


const obj = {
    name: "Nikhil",
    info: {
        country: "Bangladesh",
        email: {
            mail1: "example1@gmail.com",
            mail2: "example2@gmail.com"
        }
    }
}

const {name, info: {email: {mail2}}} = obj;

console.log(mail2)

{
    let obj2 = {a: 1}
    let list1 = [1,10]
    let {a,b=5} = obj2;
    let [x,y=2] = list1;
    console.log(y)
}
{
    let list = [7,42]
    let [a=1,b=2,c=5, d] = list;
    a === 7;
    b === 42;
    c === 3;
    d=== undefined

    console.log(d)
}