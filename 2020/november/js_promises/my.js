let btn = document.getElementById("btn");
let btn_pause = document.getElementById('btn_pause')
let audio = new Audio('chura_liya.mp3');
btn.onclick = ()=> {
    audio.play()
    console.log('play')
}
btn_pause.onclick = ()=> {
    audio.pause()
}


function Changing(val){
    console.log(val.value)
    audio.volume = val.value;
}