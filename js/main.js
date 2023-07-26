// // header section

// let inpSearch = document.querySelector("input[type='search']")
// let iconSearch = document.querySelector(".d-search i")

// let showHide= function(tag){
//     if(tag.className.includes("d-none")){
//         tag.classList.remove("d-none")
//     }else{
//         tag.classList.add("d-none")
//     }
// }
// // showHide(inpSearch);




// header section


// mainTitle div 1

let mainTitle = document.querySelector(".header .mainTitle h1")
mainTitle.onclick = () => window.open('#', '_self');

// mainTitle div 2

let icon1 = document.querySelector(".header .mainTitle i:first-child")
let icon2 = document.querySelector(".header .mainTitle i:nth-child(2)")
let icon3 = document.querySelector(".header .mainTitle i:nth-child(3)")
icon1.onclick = () => window.open('https://www.facebook.com/Marwan.Ibrahim.1011/', '_blank');
icon2.onclick = () => window.open('https://wh.ms/393274578834', '_blank');
icon3.onclick = () => window.open('tel:+393274578834', '_blank');








