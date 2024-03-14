function loading() {
    let timeline = gsap.timeline()
    timeline.to('#yellow2', {
        y: "-100%",
        duration: 0.7,
        delay: 0.5,
        ease: 'expo.out'
    })

    timeline.from('#yellow1', {
        y: '100%',
        delay: 0.3,
        duration: 0.7,
        ease: 'expo.out'
    }, "anim")

    timeline.to('#loader h1', {
        delay: 0.2,
        color: 'black',
    }, "anim")
    timeline.to('#loader', {
        opacity: 0,
    })
    timeline.to('#loader', {
        display: 'none',
    })
}
loading();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



const element = document.querySelectorAll('.elem');
const page2 = document.querySelector('#page2')

element.forEach(value => {
    value.addEventListener('mouseenter', (event) => {
        let image = event.target.getAttribute('data-img');
        page2.style.backgroundImage = `url(${image})`;
    })
    value.addEventListener('mouseleave', (event) => {
        let image = event.target.getAttribute('data-img');
        page2.style.backgroundImage = `none`;
    })
})


const goTop = document.querySelector('.go-top-container');

goTop.addEventListener('click', () => {
    scroll.scrollTo(0)
});


// .about {
// }
// .studies {
// }

let plusBtn = document.querySelector('.plus-btn');
let about = document.querySelector(".about");
let studies = document.querySelector('.studies');
let project = document.querySelector('.project');


plusBtn.addEventListener('click' , ()=>{
    about.classList.toggle('nav-li-sec');
    studies.classList.toggle('nav-li-sec');
    about.classList.toggle('nav-btn-click');
    studies.classList.toggle('nav-btn-click');
    project.classList.toggle('nav-li-sec2')
    project.classList.toggle("nav-pro-click")
})



