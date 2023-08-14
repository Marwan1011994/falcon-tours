
// infocoll

let viewCall = document.querySelector(".infocoll .viewcall")
let close = document.querySelector(".infocoll .close")
let whats = document.querySelector(".infocoll .whats")
let phone = document.querySelector(".infocoll .phone")

viewCall.onclick = function(){
    whats.removeAttribute("hidden")
    phone.removeAttribute("hidden")
    close.removeAttribute("hidden")
    viewCall.setAttribute("hidden","")
}
close.onclick = function(){
    whats.setAttribute("hidden","")
    phone.setAttribute("hidden","")
    close.setAttribute("hidden","")
    viewCall.removeAttribute("hidden")
}
whats.onclick = () => window.open('https://wh.ms/393274578834', '_blank');
phone.onclick = () => window.open('tel:+393274578834', '_blank');
