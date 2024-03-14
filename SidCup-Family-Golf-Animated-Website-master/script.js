let cursor = document.querySelector('#cursor')
let cursorBlur = document.querySelector('#cursor-blur');

document.addEventListener('mousemove', (event) => {
  cursor.style.left = event.clientX + 60 + "px";
  cursor.style.top = event.clientY + "px";
  cursorBlur.style.left = event.clientX - 250 + "px";
  cursorBlur.style.top = event.clientY - 250 + "px";
})

const h4All = document.querySelectorAll('#nav h4')
h4All.forEach(value => {
  value.addEventListener('mouseenter', () => {
    cursor.style.height = '80px';
    cursor.style.width = '80px';
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
    cursor.style.transition = "all 0.3s ease-in-out"
  })
  value.addEventListener('mouseleave', () => {
    cursor.style.height = '20px';
    cursor.style.width = '20px';
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#95C11E";
    cursor.style.transition = "none"
  })

})

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  }
})


gsap.from("#about-us img , #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3, //if one card animation done then after the 0.3 sec second card animation will done
  scrollTrigger:{
    trigger:"#about-us",
    scroller : "body",
    start : "top 60%",
    end : "top 58%",
    scrub : 2,
  }
})

gsap.from(".cards", {
  scale : 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4,
  scrollTrigger:{
    trigger:".cards",
    scroller : "body",
    start : "top 70%",
    end : "top 65%",
    scrub : 1,
  }
})


gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1" , {
  y : 70,
  scrollTrigger : {
    trigger : "#page4",
    scroller : "body",
    start : "top 70%",
    end : "top 45%",
    scrub : 3,
  }
})

document.querySelectorAll('.elem').forEach(value=>{
  value.addEventListener('mouseenter' , ()=>{
    document.querySelector('#page4 h1').style.webkitTextStroke = `2px #27A535`
  })
  value.addEventListener('mouseleave' , ()=>{
    document.querySelector('#page4 h1').style.webkitTextStroke = `2px white`
  })
})

let bottomCursor = document.querySelector('#bottom-cursor');

bottomCursor.addEventListener('click' , (event)=>{
  window.scrollTo({
    top : document.body.scrollHeight,
    behavior : "smooth",
  })
})
