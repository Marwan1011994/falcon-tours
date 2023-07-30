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

////////////////////////////////////

let contTour = document.querySelector(".tours .content-tours")
let btnMore = document.querySelector(".tours .btnMore")
let btnHide= document.querySelector(".tours .btnHide")
btnMore.onclick =function(){
    for(let i = 6 ; i<12;i++){
        contTour.innerHTML += `
        <div class="col-lg-4 col-sm-6 col-12  p-2 idtour"  id="${contentTour[i].id}">
        <div class="card" style="width:100%;">
          <img class="card-img-top" src="${contentTour[i].img}" alt="Card image">
          <div class="card-body">
            <h4 class="card-title" style="text-align:justify">${contentTour[i].title}</h4>
            <p class="card-text" style="text-align:justify;min-height:150px">${contentTour[i].content1}</p>
            <p class="card-text" style="text-align:justify;min-height:100px">${contentTour[i].content2}</p>
            <a href="#" class="btn btn-primary">قراءة المزيد</a>
          </div>
        </div> `
    }
    btnMore.setAttribute("hidden","")
    btnHide.removeAttribute("hidden")
}
btnHide.onclick = function(){
    T7.remove();
    T8.remove();
    T9.remove();
    T10.remove();
    T11.remove();
    T12.remove();
    btnMore.removeAttribute("hidden")
    btnHide.setAttribute("hidden","")
}
let contentTour = [
    {
        id:"T1",
        title:"استمتع بجولة سياحية الى بلكونة ايطاليا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T2",
        title:"استمتع بجوله سياحية فى بحيرة لاغو ماجورى",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T3",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T4",
        title:"استمتع بجوبة سياحية فى الاراضى الخمسة Cinque Terre",
        img : "images/جولة من ميلانو الى الاراضي الخمسة Cinque Terre.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T5",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T6",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T7",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T8",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T9",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T10",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T11",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
    {
        id:"T12",
        title:"استمتع بجوبة سياحية فى فلورنس وبيزا",
        img : "images/img-us1.jpg",
        content1:"هذا الجوله معموله خصيصا ليك حيث جمال الطبيعه والاسترخاء حيث تعد هذه المنطقه قريبه نسبيا من ميلانو وهى على احدى قمم الالب وتعتبر منطقة فريدة ذات اطلالة بانورامية على بحيرة لوغانو السويسرية وهى تقع على الحدود بين ايطاليا وسويسرا لذلك سميت بهذا الاسم",
        content2:"احجز جولتك السياحية الخاصه الان واستمتع   بجمال المنطقه مع سائق عربى يرشدك ويخبرك بأجمل المناطق الموجوده بايطاليا كلمنا ولا تترد للحجز تواصل معانا واتس او موبايل "
    },
];

for(let i = 0; i<6;i++){
    contTour.innerHTML += `
    <div class="col-lg-4 col-sm-6 col-12 p-2 idtour" id="${contentTour[i].id}">
    <div class="card" style="width:100%;">
      <img class="card-img-top" src="${contentTour[i].img}" alt="Card image" style="height:200px">
      <div class="card-body">
        <h4 class="card-title" style="text-align:justify;height:80px">${contentTour[i].title}</h4>
        <p class="card-text" style="text-align:justify;min-height:150px">${contentTour[i].content1}</p>
        <p class="card-text" style="text-align:justify;min-height:100px">${contentTour[i].content2}</p>
        <a href="#" class="btn btn-primary">قراءة المزيد</a>
      </div>
    </div> `
}










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




