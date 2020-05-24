const bgTop1 = document.querySelector('#bg-top-1');
const bgBottom1 = document.querySelector('#bg-bottom-1');
const bgTop2 = document.querySelector('#bg-top-2');
const bgBottom2 = document.querySelector('#bg-bottom-2');
const bgFooter = document.querySelector('#bg-footer');




const backgroundImages = function () {
    //Get new Width of inner window
    const windowSize = window.innerWidth;
    console.log("windowSize")
    if (windowSize < 510) {

        

        bgTop1.setAttribute('src', 'images/bg-section-top-mobile-1.svg');

        bgTop2.setAttribute('src', 'images/bg-section-top-mobile-2.svg');

        bgBottom1.setAttribute('src', 'images/bg-section-bottom-mobile-1.svg');

        bgBottom2.setAttribute('src', 'images/bg-section-bottom-mobile-2.svg');

        bgFooter.setAttribute('src', 'images/bg-footer-top-mobile.svg');
    }else {

        bgTop1.setAttribute('src', 'images/bg-section-top-desktop-1.svg');

        bgTop2.setAttribute('src', 'images/bg-section-top-desktop-2.svg');

        bgBottom1.setAttribute('src', 'images/bg-section-bottom-desktop-1.svg');

        bgBottom2.setAttribute('src', 'images/bg-section-bottom-desktop-2.svg');

        bgFooter.setAttribute('src', 'images/bg-footer-top-desktop.svg')
    }

    
}

const backgroundListen = function(){
    console.log("resized");
    window.addEventListener('resize', function (event) {
        backgroundImages();
    });
}





const app = function () {
    backgroundImages();
    backgroundListen();
}
app();