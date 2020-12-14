let text = "How are you? ||| তুমি কেমন আছো? "

let en = text.slice(0,text.indexOf('|||'));
let bn = text.slice(text.indexOf('|||') + 4, text.length)
console.log(bn)
