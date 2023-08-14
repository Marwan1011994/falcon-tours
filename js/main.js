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
icon1.onclick = () => window.open('https://wh.ms/393274578834', '_blank');
icon2.onclick = () => window.open('https://wh.ms/393274578834', '_blank');
icon3.onclick = () => window.open('tel:+393274578834', '_blank');

////////////////////////////////////



// infoarticles




let contTour = document.querySelector(".tours .content-tours")
let btnMore = document.querySelector(".tours .btnMore")
let btnHide= document.querySelector(".tours .btnHide")



for(let i = 0; i<contentTour.length;i++){
    contTour.innerHTML += `
    <div class="col-lg-4 col-md-6 col-12 p-2 idtour">
    <div class="card" style="width:100%;height:600px;position:relative;">
      <img class="card-img-top" src="${contentTour[i].img}" alt="Card image" style="height:200px">
      <div class="card-body">
        <h4 class="card-title" style="text-align:justify;" title="${contentTour[i].title}">${contentTour[i].title}</h4>
        <p class="card-text" style="text-align:justify;">${contentTour[i].content1}</p>
        <a href="#" class="btn btn-primary readMore" style="position:absolute;bottom:20px;right:10px" id="${contentTour[i].id}">قراءة المزيد</a>
      </div>
    </div> `
}

let idTour = document.querySelectorAll(".idtour")

for(let j=6;j<contentTour.length;j++){
    idTour[j].setAttribute("hidden","")
}
let readMore = document.querySelectorAll(".idtour .card .readMore")
readMore.forEach(function(ele){
    ele.onclick =function(){
        localStorage.setItem("id",ele.id);
        window.open("infoarticles.html","_self")
        
    } 
})


btnMore.onclick =function(){
    btnMore.setAttribute("hidden","")
    btnHide.removeAttribute("hidden")
    for(let j=6;j<contentTour.length;j++){
        idTour[j].removeAttribute("hidden")
    }
}

btnHide.onclick = function(){
    btnMore.removeAttribute("hidden")
    btnHide.setAttribute("hidden","")
    for(let j=6;j<contentTour.length;j++){
        idTour[j].setAttribute("hidden","")
    }
} 

/////////////////////////////////////////////////////////////


// info-italy

let contInfoIt = document.querySelector(".infoitaly .content-info")


for(let i = 0; i<infoIt.length;i++){
    contInfoIt.innerHTML += `
    <div class="col-12 p-2 contArt">
        <div class="card shadow">
        <img class="card-img-top h-25" src="${infoIt[i].img}" alt="Card image" style="height:200px">
        <div class="card-body">
            <h4 class="card-title" style="text-align:justify;" title="${infoIt[i].title}">${infoIt[i].title}</h4>
            <p class="card-text" style="text-align:justify;">${infoIt[i].content1}</p>
            <p class="card-text" style="text-align:justify;">${infoIt[i].content2}</p>
            <a href="#" class="btn btn-primary readMore" id="${infoIt[i].id}">قراءة المزيد</a>
        </div> 
      </div>`
}


let links = document.querySelectorAll(".linksto .links")
console.log(links)
let contArt = document.querySelectorAll(".infoitaly .contArt")
console.log(contArt)
for(let i=4;i<contArt.length;i++){
    contArt[i].setAttribute("hidden","")
}

links.forEach(function(ele){
    ele.onclick = function(){
        localStorage.setItem("link",ele.innerHTML)
        links.forEach(function(ele){
            ele.classList.remove("activebtn")
        })
        ele.classList.add("activebtn")
        if(ele.innerHTML === "1"){
            for(let i=4;i<contArt.length;i++){
                contArt[i].setAttribute("hidden","")
            }
            for(let i=0;i<4;i++){
                contArt[i].removeAttribute("hidden")
            }
        }
        if(ele.innerHTML === "2"){
            for(let i=0;i<4;i++){
                contArt[i].setAttribute("hidden","")
            }
            for(let i=8;i<12;i++){
                contArt[i].setAttribute("hidden","")
            }
            for(let i=4;i<8;i++){
                contArt[i].removeAttribute("hidden")
            }
        }
        if(ele.innerHTML === "3"){
            for(let i=0;i<8;i++){
                contArt[i].setAttribute("hidden","")
            }
            for(let i=8;i<12;i++){
                contArt[i].removeAttribute("hidden")
            }
        }
        window.location = '#topart';
    }
})

let storge = localStorage.getItem("link")
if(storge === "1"){
    for(let i=4;i<contArt.length;i++){
        contArt[i].setAttribute("hidden","")
    }
    for(let i=0;i<4;i++){
        contArt[i].removeAttribute("hidden")
    }
    links.forEach(function(ele){
        if(ele.innerHTML === "1"){
            ele.classList.add("activebtn")
        }else{
            ele.classList.remove("activebtn")
        }
    })
}
if(storge === "2"){
    for(let i=0;i<4;i++){
        contArt[i].setAttribute("hidden","")
    }
    for(let i=8;i<12;i++){
        contArt[i].setAttribute("hidden","")
    }
    for(let i=4;i<8;i++){
        contArt[i].removeAttribute("hidden")
    }
    links.forEach(function(ele){
        if(ele.innerHTML === "2"){
            ele.classList.add("activebtn")
        }else{
            ele.classList.remove("activebtn")
        }
    })
}
if(storge === "3"){
    for(let i=0;i<8;i++){
        contArt[i].setAttribute("hidden","")
    }
    for(let i=8;i<12;i++){
        contArt[i].removeAttribute("hidden")
    }
    links.forEach(function(ele){
        if(ele.innerHTML === "3"){
            ele.classList.add("activebtn")
        }else{
            ele.classList.remove("activebtn")
        }
    })
}

