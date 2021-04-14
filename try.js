$('#rotation-on').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 3000, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('#rotation-off').owlCarousel({
    loop:false,
    margin:0,
    dots:false,
    nav:true,
    autoplay:false, 
    responsive:{
        0:{
            items:3
        },
        768:{
            items:4
        },
        1024:{
            items:5
        }
    }
})

let categoryList = document.querySelector('.category-list');
let dropDownList = document.querySelector('.dropdown-list');
let searchButton = document.querySelector('#search-btn');
let searchBox = document.querySelector('#search-box');
let accountsList = document.querySelector('.accounts');
let userIcon = document.querySelector('.user');
let parts = document.querySelectorAll('.parts');
let displayParts = document.querySelectorAll('.part-1');
let displayColor = document.querySelectorAll('.mens-color1');

categoryList.addEventListener('mouseover',function (){
    dropDownList.style.display='block';
});
dropDownList.addEventListener('mouseleave',function (){
    dropDownList.style.display='none';
});
searchButton.addEventListener('click',function (){
    searchBox.style.display='inline-block';
});
userIcon.addEventListener('click',function (){  /*new*/
    accountsList.classList.toggle('show');
})
// for(var i=0;i<parts.length;i++){
//     console.log(i);
//     parts[i].addEventListener('click',function(){
        
//         for(j=0;j<parts.length;j++){
//             displayParts[j].style.display='none';
//             displayParts[i].style.display='block';
//         }
        
//     });
// }
parts[0].addEventListener('click', function(){
    for(j=0;j<displayParts.length;j++){
        displayParts[j].style.display='none';
    }
    displayParts[0].style.display='block';
});
parts[1].addEventListener('click', function(){
    for(j=0;j<displayParts.length;j++){
        displayParts[j].style.display='none';
    }
    displayParts[1].style.display='block';
});
parts[2].addEventListener('click', function(){
    for(j=0;j<displayParts.length;j++){
        displayParts[j].style.display='none';
    }
    displayParts[2].style.display='block';
});
displayColor[0].addEventListener('click', function(){
    for(j=0;j<displayParts.length;j++){
        displayParts[j].style.display='none';
    }
    displayParts[3].style.display='block';
});
displayColor[1].addEventListener('click', function(){
    for(j=0;j<displayParts.length;j++){
        displayParts[j].style.display='none';
    }
    displayParts[4].style.display='block';
});
displayColor[2].addEventListener('click', function(){
    for(j=0;j<displayParts.length;j++){
        displayParts[j].style.display='none';
    }
    displayParts[5].style.display='block';
});