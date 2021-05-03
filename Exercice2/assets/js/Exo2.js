let textBold = false;
let sizingMax = false;

function bolder(text){
    text = document.getElementById("div1");
    if(textBold == true){
        text.style["font-weight"] = "normal"
        textBold = false;
    }
    else if (textBold == false){
        text.style["font-weight"] = "bold" ;
        textBold = true;
    }
}

function color(text){
    text = document.getElementById("div1");
    text.style["color"] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function sizing(text){
    text = document.getElementById("div1");
    
    if (sizingMax == false){
        text.style["font-size"] = "20px";
        sizingMax = true;
    }
    else{
        text.style["font-size"] = "15px";
        sizingMax = false;
    }
   
}