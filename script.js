const canvas = new fabric.Canvas('canvas', {
    width:600,
    height:240,
    backgroundColor: 'rgb(35, 35, 40)',
    preserveObjectStacking: true,
    uniformScaling:true
});
const heightDelta= 240-52; //188
const scaleFactor= 600;
var img = 1

function handleImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.src = event.target.result;
            
            img.onload = function(){ 
                fabric.Image.fromURL(img.src, function(img){
                    img.scale((scaleFactor / img.height)+0.1) //add 0.1 for better user exp
                    canvas.add(img);
                });
            }            
        }
        reader.readAsDataURL(e.target.files[0]);
        canvas.requestRenderAll();
}


function resetCanvas(){
    canvas.clear(canvas);
    canvas.setBackgroundColor('rgb(35, 35, 40)');
}

function chooseCard(){
    let input = document.getElementById("cardSearcher").value;
    let cardSrc = "./allCards/"+input+".jpg"
    fabric.Image.fromURL(cardSrc, function(cardSrc){
        cardSrc.scale(2);
        cardSrc.set({top:-250, left:-100 });
        canvas.add(cardSrc);
    });   
}
function applyBorder(){
    if (radio_live.checked)    { fabric.Image.fromURL('./img/Live.png',   function(live){canvas.add(live);
        live.set({top:heightDelta }).setCoords();
    }) };
    if (radio_multi.checked)   { fabric.Image.fromURL('./img/Multi.png',  function(multi){canvas.add(multi);
        multi.set({top:heightDelta }).setCoords();
    }) };
    if (radio_invi.checked)    { fabric.Image.fromURL('./img/Invi.png',   function(invi){canvas.add(invi);
        invi.set({top:heightDelta }).setCoords();
    }) };
    if (check_patreon.checked) { fabric.Image.fromURL('./img/logo_PA.png',function(logo_PA){canvas.add(logo_PA);
        logo_PA.set({top:heightDelta+1, left:550 }).setCoords();
    }) };
}

function applyEffect(effectURL, topPos, leftPos){
    fabric.Image.fromURL(effectURL,   
    function(img){canvas.add(img);
    img.set({top:topPos, left:leftPos}).setCoords();
    }) 
}

function download(){
    let canvasUrl = canvas.toDataURL();
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;
    createEl.download = "EventBanner";
    createEl.click();
    createEl.remove();
};
