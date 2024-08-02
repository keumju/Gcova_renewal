/* -------------------- header -------------------- */

// header_center_nav
const head = document.querySelector('header')
const nav = document.querySelector('.mainmenu')
const navs = document.querySelectorAll('.mainmenu>li');
const mains = document.querySelectorAll('.mainmenu>li>a');
const subs = document.querySelectorAll('.submenu');
const back = document.querySelector('.sub_back');

nav.addEventListener('mouseover',function(){
        for(j=0; j<5; j++){
            subs[j].style.height = '300px';
        };
        head.style.borderBottom = '1px solid #e7e7e7';
        back.style.height = '300px';
    })
nav.addEventListener('mouseleave',function(){
        for(j=0; j<5; j++){
            subs[j].style.height = '0';
        };
        head.style.backgroundColor = 'rgba(299,299,299,0.7)'
        head.style.borderBottom = 'none';
        back.style.height = '0';
})
navs.forEach(function(nav,i){
    nav.addEventListener('mouseover',function(){
        mains[i].style.borderBottom = '3px solid #e0462e'
        mains[i].style.color = '#F05A21'
    })
    nav.addEventListener('mouseleave',function(){
        mains[i].style.borderBottom = 'none'
        mains[i].style.color = '#261810'
    })
})

// header_right_ham
const ham = document.querySelector('.ham');
const hamTop = document.querySelector('.ham>span:nth-child(1)')
const hamCenter = document.querySelector('.ham>span:nth-child(2)');
const hamBottom = document.querySelector('.ham>span:nth-child(3)');
const navon = document.querySelector('.nav_on')

ham.addEventListener('click',function(){
    ham.classList.toggle('on');
    if(ham.classList.contains('on')){
        hamCenter.style.display = 'none';
        hamTop.style.transform = 'rotate(45deg)';
        hamTop.style.backgroundColor = '#fff';
        hamTop.style.marginTop = '13px';
        hamBottom.style.transform = 'rotate(-45deg)';
        hamBottom.style.marginTop = '-2px';
        hamBottom.style.backgroundColor = '#fff';
        navon.style.display='flex';
    }else{
        hamCenter.style.display = 'block';
        hamTop.style.transform = 'rotate(0)';
        hamTop.style.marginTop = '5px';
        hamTop.style.backgroundColor = '#000';
        hamBottom.style.transform = 'rotate(0)';
        hamBottom.style.marginTop = '8px';
        hamBottom.style.backgroundColor = '#000';
        navon.style.display='none';
    }
})

/* -------------------- main -------------------- */
// section_1_slide
var swiper = new Swiper(".sec1 .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".sec1 .swiper-button-next",
        prevEl: ".sec1 .swiper-button-prev",
    },
});