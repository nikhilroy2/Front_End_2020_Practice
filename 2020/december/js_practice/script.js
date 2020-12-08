// Function to get the Selected Text  
function getSelectedText() { 
    var selectedText = ''; 

    // window.getSelection 
    if (window.getSelection) { 
        selectedText = window.getSelection(); 
    } 
    
     else return; 
    // To write the selected text into the textarea 
    document.testform.selectedtext.value = selectedText
} 
document.onmouseup = getSelectedText