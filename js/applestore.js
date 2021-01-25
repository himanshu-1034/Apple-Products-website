let ap = document.getElementById('pro');
let ap2 = document.getElementById('pro2');

let airpods = "images/apple store/airpods.png";
let airpods2 = "images/apple store/airpodspro.png";

ap.addEventListener('click',function (){
    document.getElementById('airpodsimg').src = airpods;
});

ap2.addEventListener('click',function (){
    document.getElementById('airpodsimg').src = airpods2;
});


let w = document.getElementById('watch1');
let w2 = document.getElementById('watch2');

let watch3 = "images/apple store/iwatchs3.png";
let watch5 = "images/apple store/iwatchs5.png";

w.addEventListener('click',function (){
    document.getElementById('watchimg').src = watch3;
});

w2.addEventListener('click',function (){
    document.getElementById('watchimg').src = watch5;
});



let i = document.getElementById('iphone1');
let i2 = document.getElementById('iphone2');

let phone11 = "images/apple store/iphone11.png";
let phone11p = "images/apple store/iphone11pro.png";

i.addEventListener('click',function (){
    document.getElementById('iphoneimg').src = phone11;
});

i2.addEventListener('click',function (){
    document.getElementById('iphoneimg').src = phone11p;
});


function homepage(){
    location.replace('homepage.html');
}
