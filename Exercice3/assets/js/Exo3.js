let textBold = false;
let sizingMax = false;
let text = "";

//FONCTION DE BASE 

// function bolder(){
//     text = document.getElementById("body");
//     if(textBold == true){
//         text.style["font-weight"] = "normal"
//         textBold = false;
//     }
//     else if (textBold == false){
//         text.style["font-weight"] = "bold" ;
//         textBold = true;
//     }
// }

//FONCTION FLECHEES
const bolder = () => {
     text = document.getElementById("body");
     if(textBold == true){
         text.style["font-weight"] = "normal"
         textBold = false;
     }
     else if (textBold == false){
         text.style["font-weight"] = "bold" ;
         textBold = true;
     }
}
//FONCTION DE BASE

// function color(){
//     text = document.getElementById("body");
//     text.style["color"] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
// }

//FONCTION FLECHEES
const color = () => {
    text = document.getElementById("body");
    text.style["color"] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}


//FONCTION DE BASE

// function sizing(){
//     text = document.getElementById("body");
    
//     if (sizingMax == false){
//         text.style["font-size"] = "20px";
//         sizingMax = true;
//     }
//     else{
//         text.style["font-size"] = "15px";
//         sizingMax = false;
//     }
// }


//FONCTION FLECHEES
const sizing = () => {
    text = document.getElementById("body");
    
    if (sizingMax == false){
        text.style["font-size"] = "20px";
        sizingMax = true;
    }
    else{
        text.style["font-size"] = "15px";
        sizingMax = false;
    }
}