const buttonE1=document.querySelector("button");
buttonE1.addEventListener("mouseover",(event)=>{
    const x= event.pageX - buttonE1.offsetLeft;
    const y= event.pageY - buttonE1.offsetTop;

    buttonE1.style.setProperty("--xpos", x + "px");
    buttonE1.style.setProperty("--ypos", y + "px");

});