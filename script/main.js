
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


