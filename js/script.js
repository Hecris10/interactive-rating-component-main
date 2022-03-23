let rate = 0;

function disableRate(beinClicked){
    let checkClicked = document.querySelectorAll(".rateClick");
    if (checkClicked == undefined){
        console.log("Não encontrado");
        return;
    }
   checkClicked.forEach(element => {
    if(element!=beinClicked){
        element.classList.remove('rateClick');
    }
   })
}

function checkClick1(){
    var checkClicked = document.querySelector(".rateClick");
    var beinClicked = document.querySelector(".rate-1");
    disableRate(beinClicked);
    beinClicked.classList.toggle("rateClick");
    rate = 1;
}
function checkClick2(){
    var checkClicked = document.querySelector(".rateClick");
    var beinClicked = document.querySelector(".rate-2");
    disableRate(beinClicked);
    beinClicked.classList.toggle("rateClick");
    rate = 2;
}
function checkClick3(){
    var checkClicked = document.querySelector(".rateClick");
    var beinClicked = document.querySelector(".rate-3");
    disableRate(beinClicked);
    beinClicked.classList.toggle("rateClick");
    rate = 3;
}
function checkClick4(){
    var checkClicked = document.querySelector(".rateClick");
    var beinClicked = document.querySelector(".rate-4");
    disableRate(beinClicked);
    beinClicked.classList.toggle("rateClick");
    rate = 4;
}
function checkClick5(){
    var checkClicked = document.querySelector(".rateClick");
    var beinClicked = document.querySelector(".rate-5");
    disableRate(beinClicked);
    beinClicked.classList.toggle("rateClick");
    rate = 5;
}


