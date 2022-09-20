//Navbar shrink
let prevScrollpos = window.scrollY;
window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    const navbarCollapsible = document.querySelector("#navBar")
    if (prevScrollpos > currentScrollPos) {
        navbarCollapsible.style.top = "0";
        navbarCollapsible.classList.add('shrink');
    } else {
        navbarCollapsible.style.top = "-100px";
    }
    if(currentScrollPos < 1){
        navbarCollapsible.classList.remove('shrink');
    }
    prevScrollpos = currentScrollPos;
}

//Navbar toggle
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(element => element.addEventListener('click', toggleMenu));



function toggleMenu(e){
    menuLinks.forEach(element => element.classList.remove('active-link'));
    e.target.classList.add('active-link');
    showBurgerMenu();
}

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.header__menu');
const menuNav = document.querySelector('.menu__list');

menuBtn.addEventListener('click', showBurgerMenu);

let showMenu = false;
function showBurgerMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuLinks.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuLinks.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

//Intro Read More Button
const readMoreButton = document.querySelector('#read-more-btn');
const moreText = document.querySelector('.intro__more');
let showMore = false;
readMoreButton.addEventListener("click", toggleMoreText);

function toggleMoreText (){
    if(!showMore){
        readMoreButton.innerHTML = 'Close';
        moreText.style.overflow = 'visible';
        moreText.style.maxHeight = '100%';
        moreText.style.opacity = '1';
        showMore = true;
    } else{
        readMoreButton.innerHTML = 'Read More';
        moreText.style.overflow = 'hidden';
        moreText.style.maxHeight = '0';
        moreText.style.opacity = '0';
        showMore = false;
    }
}

//About button handler
const aboutButtons = document.querySelectorAll('.about-btn');
const aboutContent = document.querySelectorAll('.about-content__item');

aboutButtons.forEach(item => item.addEventListener('click', toggleAbout));

function toggleAbout(e) {
    aboutButtons.forEach(element => element.classList.remove('active'));
    e.target.classList.add('active');
    aboutContent.forEach(element => {
        element.classList.add('hidden');
        if(element.dataset.id === e.target.dataset.id){
            element.classList.add('visible');
            element.classList.toggle('hidden');
        }
    })
}

function setDataId(arr){
    for(let i = 0; i < arr.length; i++){
        let id = i + 1;
        arr[i].dataset.id = id.toString();
    }
}

setDataId(aboutContent);
setDataId(aboutButtons);

//Services button handler
const servicesButtons = document.querySelectorAll('.services-btn');
const servicesContent = document.querySelectorAll('.services-content__item');

setDataId(servicesButtons);
setDataId(servicesContent);

servicesButtons.forEach(item => item.addEventListener('click', toggleServices));

function toggleServices(e) {
    servicesButtons.forEach(element => element.classList.remove('active'));
    e.target.classList.add('active');
    servicesContent.forEach(element => {
        element.classList.add('hidden');
        if(element.dataset.id === e.target.dataset.id){
            element.classList.add('visible');
            element.classList.toggle('hidden');
        }
    })
}

//Portfolio Filter Handler
let galleryItems = document.querySelectorAll(".gallery__item");
let galleryButtons = document.querySelectorAll(".portfolio-link");
let gallery = document.querySelector("#gallery");
console.log(galleryButtons);
galleryButtons.forEach(item => item.addEventListener('click', filterGallery));

function filterGallery(e){
    console.log(e.target.dataset.id);
    galleryButtons.forEach(element => element.classList.remove('active'));
    e.target.classList.add('active');
    gallery.innerHTML = "";

    if(e.target.dataset.id === "all"){
        galleryItems.forEach(element => gallery.append(element));
    }

    galleryItems.forEach(element => {
        if (element.classList.contains(e.target.dataset.id)){
            console.log(element);
            gallery.append(element);
        }
    })
}

