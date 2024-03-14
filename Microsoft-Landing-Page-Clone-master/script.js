// NAVIGATION BAR JAVASCRIPT

const navText = document.querySelectorAll('.nav-un-animation');
navText.forEach((value)=>{
    value.addEventListener('mouseenter' , (event)=>{
        event.target.style.borderBottom = '1px solid black';
    })
    value.addEventListener('mouseleave' , (event)=>{
        event.target.style.borderBottom = 'none';
    })
})

const stripText = document.querySelector('.strip-text');
const stripArrow = document.querySelector('.strip-arrow');

stripText.addEventListener('mouseenter' , ()=>{
    stripArrow.style.transform = `translateX(6px)`
})
stripText.addEventListener('mouseleave' , ()=>{
    stripArrow.style.transform = `translateX(0px)`
})

const allMicrosoft = document.querySelector('.all-microsoft');
const allMicrosoftClick = document.querySelector('.click-all-microsoft')

document.addEventListener('click', (e) => {
    if (!allMicrosoft.contains(e.target)) {
        allMicrosoft.classList.remove('all-microsoft-click-background');
        allMicrosoftClick.classList.remove('visible')
    }
});


allMicrosoft.addEventListener('click' , (e)=>{
    e.stopPropagation();
    allMicrosoft.classList.toggle('all-microsoft-click-background');
    allMicrosoftClick.classList.toggle('visible')
})

// IMAGE - SLIDER
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
const arrowRight = document.querySelector('.slide-arrow-right');
const arrowLeft = document.querySelector('.slide-arrow-left');
const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const cirBtn1 = document.querySelector('.slide-circle-btn1')
const cirBtn2 = document.querySelector('.slide-circle-btn2')


arrowRight.addEventListener('mouseenter' , (e)=>{
    arrowRight.style.transform = 'translateX(8px)'
})
arrowRight.addEventListener('mouseleave' , (e)=>{
    arrowRight.style.transform = 'translateX(0px)'
})
arrowLeft.addEventListener('mouseenter' , (e)=>{
    arrowLeft.style.transform = 'translateX(-8px)'
})
arrowLeft.addEventListener('mouseleave' , (e)=>{
    arrowLeft.style.transform = 'translateX(0px)'
})

// SLIDER ANIMATION
function cirBtnR(){
    cirBtn1.classList.remove('fa-solid');
    cirBtn1.classList.add('fa-regular')
    cirBtn2.classList.add('fa-solid')
}

function cirBtnL(){
    cirBtn2.classList.remove('fa-solid');
    cirBtn2.classList.add('fa-regular')
    cirBtn1.classList.add('fa-solid')
}

function sliderAni(value){
    if(value === true){
        slider2.style.transform = `translate(-1950px)`
        slider1.style.transform = `translate(0px)`
    }
    else if(value === false){
        slider2.style.transform = `translate(0px)`
        slider1.style.transform = `translate(1950px)`
    }
}

arrowRight.addEventListener('click' , (e)=>{
    cirBtnR()
    sliderAni(true)
})

arrowLeft.addEventListener('click' , ()=>{
    cirBtnL()
    sliderAni(false)
})

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

const deviceContainerA = document.querySelectorAll('.device-container-a');



deviceContainerA.forEach(value=>{
    value.addEventListener('mouseenter' , (event)=>{
        event.target.style.textDecoration = `underline`;
        event.target.nextElementSibling.style.transform = `translate(11px)`;
    })
    value.addEventListener('mouseleave' , (event)=>{
        event.target.style.textDecoration = `none`;
        event.target.nextElementSibling.style.transform = `translate(5px)`;
    })
})

// FOOTER ANIMATION

const footerLi = document.querySelectorAll('.footer-underline-ani');

footerLi.forEach((value)=>{
    value.addEventListener('mouseenter' , (event)=>{
        event.target.style.textDecoration = `underline`
    })
    value.addEventListener('mouseleave' , (event)=>{
        event.target.style.textDecoration = `none`
    })
})

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.querySelector('.up-btn').addEventListener(('click') , function(){
    scrollTop();
})


function matchMediaQuery(){
    let match = window.matchMedia('(max-width: 400px)');
    const next = document.querySelectorAll('.device-container-body');
    const slider = document.querySelector('.slider')
    if(!match.matches){
        return
    }else if(match.matches){
        next.forEach(value=>{
            newelement = document.createElement('h2');
            newelement.innerHTML = value.firstElementChild.innerHTML;
            value.replaceChild(newelement , value.firstElementChild)
            slider.innerHTML = '';
            slider.innerHTML = `
            <div class="slider1">
                <div class="info flex">
                    <h2>
                        Maximise the everyday with Microsoft 362
                    </h2>
                    <p>
                        Get online protection, secure cloud storage and innovative apps designed to fit your needs – all
                        in one plan.
                    </p>
                    <div class="slide-btn flex">
                        <button type="button" class="inside-slide-btn">For One Person</button>
                        <a href="#" class="device-container-a slide-anchor">For up to six people</a>
                        <i class="slider-arrow fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div class="slider1-img">
                    <img src="Images/girls.jpg" alt="img">
                </div>
            </div>
            <div class="slider2">
                <div class="slider2-img">
                    <img src="Images/Highlight-Surface-Pro-9-M1-Family-02-1_VP2-859x540.jpg" alt="img">
                </div>
                <div class="info2 flex">
                    <h2>
                        Surface 9 Pro
                    </h2>
                    <p>
                        Tablet versatility and laptop power — all in one ultra-portable device
                    </p>
                    <div class="slide-btn flex">
                        <button type="button" class="inside-slide-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-btn flex">
            <i class="slide-play-btn fa-solid fa-pause"></i>
            <i class="slide-arrow-left slide-btn-left fa-solid fa-chevron-left"></i>
            <i class="slide-circle-btn1 fa-regular fa-circle"></i>
            <i class="slide-circle-btn2 fa-solid fa-circle"></i>
            <i class="slide-arrow-right slide-btn-right fa-solid fa-chevron-right"></i>
        </div>
        <div class="link-list">
            <ul class="flex container link-list-ul">
                <li class="link-list-li">
                    <i class="fa-brands fa-microsoft fa-2x"></i>
                    <a href="#" class="link-list-a">Choose your Microsoft 365</a>
                </li>
                <li class="link-list-li">
                    <i class="fa-brands fa-xbox fa-2x"></i>
                    <a href="#" class="link-list-a">Shop Xbox games and consoles</a>
                </li>
                <li class="link-list-li">
                    <i class="fa-brands fa-microsoft fa-2x"></i>
                    <a href="#" class="link-list-a">Get Windows 11</a>
                </li>
                <li class="link-list-li">
                    <i class="fa-solid fa-tablet fa-2x"></i>
                    <a href="#" class="link-list-a">Explore Surface devices</a>
                </li>
            </ul>
        </div>
        <div class="device-section container flex device-card">
            <div class="device-container flex">
                <div class="device-container-img">
                    <img src="Images/Content-Card-Surface-Laptop-5-M1-Platinum-01-1.jpg" alt="">
                </div>
                <div class="device-container-body flex">
                    <h2>Surface Laptop 5</h2>
                    <p>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
                </div>
                <div class="device-container-footer">
                    <a href="#" class="device-container-a">Learn More</a>
                    <i class="device-container-arrow fa-solid fa-chevron-right "></i>
                </div>`
        })
    }
}

matchMediaQuery();

window.addEventListener('resize' , ()=>{
    matchMediaQuery();
})



