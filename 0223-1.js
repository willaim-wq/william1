let header = document.querySelector("header");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset != 0){
        header.style = "box-shadow: 3px 3px 5px 1px #757474;";
    }else{
        header.style = "box-shadow: none;";
    }
});