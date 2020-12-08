function textSelection(){
    let newInput = document.createElement('input');
    newInput.setAttribute('value', window.getSelection());
    console.log(newInput.value)
    document.body.appendChild(newInput);
    newInput.remove()

}
document.onmouseup = textSelection