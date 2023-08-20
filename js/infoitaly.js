let idArt = localStorage.getItem("idIT")
console.log(idArt+1)

let readArt = document.querySelector(".first-section .read-art")
let imgArt = document.querySelector(".first-section .imgArt")

for(let i=0;i<infoIt.length;i++){
    if(infoIt[i].id === idArt){
        imgArt.innerHTML=`
        <img src="${infoIt[i].img}" alt="" class="w-100" style="height:500px;">
        `;

        readArt.innerHTML = `
        <h2>${infoIt[i].title}</h2>
        <p class="mt-4">${infoIt[i].content1}</p>
        <p class="mt-4">${infoIt[i].content2}</p>
        <p class="mt-4">${infoIt[i].content3}</p>
        <div class="d-center w-100 my-4">
            <div id="demo3" class="carousel slide w-75" data-bs-ride="carousel">
              <!-- Indicators/dots -->
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#dem3" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo3" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo3" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo3" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#demo3" data-bs-slide-to="4"></button>
                <button type="button" data-bs-target="#demo3" data-bs-slide-to="5"></button>
                <button type="button" data-bs-target="#demo3" data-bs-slide-to="6"></button>
              </div>
              <!-- The slideshow/carousel -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${infoIt[i].img1} "alt="صور للجوله" class="d-block" style="width:100%;height: 250px;">
                </div>
                <div class="carousel-item">
                  <img src="${infoIt[i].img2}" alt="صور للجوله" class="d-block" style="width:100%;height: 250px;">
                </div>
                <div class="carousel-item">
                  <img src="${infoIt[i].img3}" alt="صور للجوله" class="d-block" style="width:100%;height: 250px;"> 
                </div>
                <div class="carousel-item">
                  <img src="${infoIt[i].img4}" alt="صور للجوله" class="d-block" style="width:100%;height: 250px;"> 
                </div>
                <div class="carousel-item">
                  <img src="${infoIt[i].img5}" alt="صور للجوله" class="d-block" style="width:100%;height: 250px;"> 
                </div>
                <div class="carousel-item">
                  <img src="${infoIt[i].img6}" alt="صور للجوله" class="d-block" style="width:100%;height: 250px;"> 
                </div>
              </div>
              <!-- Left and right controls/icons -->
              <button class="carousel-control-prev" type="button" data-bs-target="#demo3" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#demo3" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
        </div>
        <h4 class="text-center">${infoIt[i].titlepic}</h4>
        <p class="mt-4">${infoIt[i].content4}</p>
        <p class="mt-4 keywords">${infoIt[i].content5}</p>
        `;
    }
}

let linkKeyWord = document.querySelectorAll(".read-art .keywords a")

linkKeyWord.forEach(function(ele){
    ele.onclick = function(){
        window.open('https://wh.ms/393274578834', '_blank')
    }
})




