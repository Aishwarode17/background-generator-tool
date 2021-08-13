let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let body = document.querySelector("body");
let css = document.querySelector(".css");

const setGradient = ()=>{
    
    let a = `linear-gradient(to right,${color1.value},${color2.value},${color3.value})`;
    
    body.style.background = a;
    
    if(!(Boolean(css.childNodes[0]))){
    css.appendChild(document.createTextNode(`CSS code: ${a};`));
    
    }
    else{
        css.removeChild(css.childNodes[0])
        css.appendChild(document.createTextNode(`CSS code: ${a};`));
    }
    return;
}


color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

color3.addEventListener("input",setGradient);

