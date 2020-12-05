const change_Obj = [
    {
        name: 'button_text',
        attr: '[data-name="button_text"]'
    },
    {
        name: 'background_image',
        attr: '[data-name="background_image"]'
    },
    {
        name: 'background_color',
        attr: '[data-name="background_color"]'

    },
    {
        name: 'font_color',
        attr: '[data-name="font_color"]'

    },
    {
        name: 'button_width',
        attr: '[data-name="button_width"]'

    },
    {
        name: 'button_height',
        attr: '[data-name="button_height"]'

    },
    {
        name: 'border_color',
        attr: '[data-name="border_color"]'
        
    },
    {
        name: 'border_radius',
        attr: '[data-name="border_radius"]'

    },
    {
        name: 'button_url',
        attr: '[data-name="button_url"]'

    }
]
let btn_styleSheet = '';
change_Obj.forEach((v,i) => {
    $(`[data-name="${v.name}"]`).on('input', function () {
        switch ($(this).attr('data-name')) {
            case 'button_text':
                Output_code($(this).val());
                $(this).attr('data-value', $(this).val());
                break;
            case 'background_image':
                Output_code($(change_Obj[0].attr).val(), $(this).val());
                $(this).attr('data-value', $(this).val());
                
                break;
            case 'background_color':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());
                
                    break;
            case 'font_color':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());
                
                    break;
            case 'button_width':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());
                
                    break;
            case 'button_height':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(), $(change_Obj[4].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());
                
                    break;
            case 'border_color':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(), $(change_Obj[4].attr).val(), $(change_Obj[5].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());
                
                    break;
            case 'border_radius':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(), $(change_Obj[4].attr).val(), $(change_Obj[5].attr).val(), $(change_Obj[6].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());
                
                    break;
            case 'button_url':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(), $(change_Obj[4].attr).val(), $(change_Obj[5].attr).val(), $(change_Obj[6].attr).val(), $(change_Obj[7].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());
                
                    break;
            default:
                console.log("not found")
        }
    })
})
function Output_code(
    btn_text = $(change_Obj[0].attr).val(),
    btn_img = $(change_Obj[1].attr).val(),
    btn_bgColor = $(change_Obj[2].attr).val(),
    btn_fontColor = $(change_Obj[3].attr).val(),
    btn_width = $(change_Obj[4].attr).val(),
    btn_height = $(change_Obj[5].attr).val(),
    btn_borderColor = $(change_Obj[6].attr).val(),
    btn_borderRadius = $(change_Obj[7].attr).val(),
    btn_url = $(change_Obj[8].attr).val()
) {

    let output_code = '';

    if(btn_text === 'sample'){
        output_code = 
        `
        <a href="${btn_url}" style='${btn_bgColor}'> ${btn_img}  </a>
        `;

    } else{
        output_code =
        `
        <a href="${btn_url}" style='
        background-image: url(${btn_img});
        background-repeat: no-repeat;
        background-color: ${btn_bgColor};
        color: ${btn_fontColor};
        width: ${btn_width}px;
        height: ${btn_height}px;
        border: 1px solid ${btn_borderColor};
        border-radius: ${btn_borderRadius}px;
        text-align: center;
        line-height: ${btn_height}px;
        text-decoration: none;
        display: inline-block;
        
        '> ${btn_text}  </a>
        `;
    }
    $('.output_code code').text(output_code);
    $('.button_output_wrapper').html(output_code)

}

Output_code()

// ......... btn_copy......

function CopyText(){
    let newInput = document.createElement('input');
    newInput.setAttribute('value', $('.output_code code').text().replace(/\s\s+/g, ' '))
    document.body.appendChild(newInput)
    newInput.select();

    newInput.setSelectionRange(0, 99999);
    document.execCommand("copy");


    newInput.remove()
}

// background change

function bgChange(val, next){
    next.value = val.value;
    Output_code()
}
// color change

function colorChange(val, next){
    next.value = val.value;
    Output_code()
}

// borderColor change

function borderColor(val, next){
    next.value = val.value;
    Output_code()
}

// checkbox function

function checkFun(val, put){
    let getValue = $(`[data-name="${put}"]`).attr('data-value');
    if(val.checked){
        $(`[data-name="${put}"]`).val(getValue)
    } else{
        $(`[data-name=${put}]`).val('')
    }
    Output_code()
    
}
// input focus

function InputFocus(val, check){
    val.value = $(val).attr('data-value')
    $(`#${check}`).prop('checked', true)
}

// ... clickColor Function

function clickColor(val, check){
    $(`#${check}`).prop('checked', true);
    $(`[data-name=${check}]`).val($(val).val());
    Output_code()
}

// ...... smaple button... 

function SampleBtn(val){
    // let output_code =
    //     `
    //     <a href="" style=''> ${val.innerHTML}  </a>
    //     `;

    // $('.output_code code').text(output_code)
    Output_code('sample', val.innerHTML, val.getAttribute('style'))
}


// hidden section working

$('[data-toggling="content_body"]').hide();
function showContentBody(){
$('[data-toggling="content_body"]').show();

}