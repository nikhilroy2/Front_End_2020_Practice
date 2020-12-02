// let obj = {
//     name: {
//         first: "Nikhil",
//         second: "Roy"
//     }

// }
// const {name: {second}} = obj
// console.log(second)


// const x = {}
// x["z"] = "I am z"

// const num = [2,4,4,56]

// function funNum(user){
//     user.forEach(function(u) {
//         return num.push(u.code)
//     })
// }
// funNum([{
//     code: 10
// }])
// let n=m=o=10
// console.log(n===m && n==o && n==m)

const num = [3,4,5,2,32,2,3];


// function getMax(arr){
//     let max = -Infinity;
//     arr.forEach(number=> {
//         max = Math.max(max,number)
//     })
//     return max;
// }

// const max = getMax(num)
// max;

// const number = [3,4,2,54,5]

// const result = number.map((n)=>(
//     {
//         numpy: n
//     }
// ))


// console.log(result)

let Obj = {
    value: 0,
    result: function(){
        setInterval(()=> {
           this.value++;
           console.log(this.value)
        },1000)
    }
}
