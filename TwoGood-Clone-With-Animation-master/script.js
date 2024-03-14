function inti() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
inti();






gsap.to('.right-div>ul', {
  opacity: 0,
  transform: 'translateY(-4px)',
  scrollTrigger: {
    trigger: '.right-div',
    scroller: '#main',
    // markers : true,
    start: 'top 2.8%',
    end: 'top 1%',
    scrub: true,
  }
})

gsap.to('#svg-1', {
  transform: 'translateY(-100%)',
  scrollTrigger: {
    trigger: '.right-div',
    scroller: '#main',
    // markers : true,
    start: 'top 2.8%',
    // end : 'top 1%',
    // scrub : true,
  }
})

gsap.to('#svg-2', {
  transform: 'translateY(0%)',
  scrollTrigger: {
    trigger: '.right-div',
    scroller: '#main',
    // markers : true,
    start: 'top 2.8%',
    // end : 'top 1%',
    // scrub : true,
  }
})



gsap.from('#page1>h1', {
  opacity: 0,
  transform: 'translateY(250px)',
  stagger: 0.4,
})

gsap.from('.cards-box', {
  opacity: 0,
  stagger: 0.2,
  duration: 0.4,
  scale: 1.1,
  scrollTrigger: {
    trigger: '.cards-box',
    scroller: '#main',
    start: 'top 30%',
  }
})

function page3Animation() {
  gsap.from('#page-3-box-container-1', {
    opacity: 0,
    transform: 'translateY(100px)',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '#page-3-box-container-1',
      scroller: '#main',
      start: 'top 50%',
    }
  })

  gsap.from('#page-3-box-container-2', {
    opacity: 0,
    transform: 'translateY(100px)',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '#page-3-box-container-2',
      scroller: '#main',
      start: 'top 50%',
    }
  })
}
page3Animation();



let button = document.querySelectorAll('.main-button');
let buttonContent = document.querySelector('.content-button');
let page4Title = document.querySelector(".page-4-content h1");
let page3Content = [
  {
    buttonName: 'm// 001 <br>Cartier.',
    value: 'THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO.'
  },
  {
    buttonName: 'm// 002 <br>Felicity T.',
    value: 'THE HAMPERS WE ORDERED WERE LOVELY AND THE TEAM ARE WONDERFUL TO LIAISE WITH.'
  },
  {
    buttonName: 'm// 003 <br>Barbara.',
    value: 'MY PACKAGE JUST ARRIVED AND THE PRESENTATION IS SO BEAUTIFUL; ELEGANT, MAGICAL AND MEANINGFUL, WITH THE ITEMS WRAPPED IN DELICIOUS-SMELLING TISSUE PAPER.GORGEOUS; WILL BE BACK FOR MORE.'
  },
  {
    buttonName: 'm// 004 <br>Salesforce.',
    value: 'I THINK I SPEAK FOR EVERYONE WHEN I SAY WE ARE VERY GRATEFUL TO HAVE BEEN ABLE TO COME IN AND HELP OUT FOR THE DAY; THE WORK YOU DO IS AMAZING.'
  },
  {
    buttonName: 'm// 005 <br>Benita.',
    value: 'I THINK I SPEAK FOR EVERYONE WHEN I SAY WE ARE VERY GRATEFUL TO HAVE BEEN ABLE TO COME IN AND HELP OUT FOR THE DAY; THE WORK YOU DO IS AMAZING.'
  },
  {
    buttonName: 'm// 006 <br>Richard.',
    value: 'MY CEO ASKED ME WHO I HAD USED FOR THE CATERING; WHEN I EXPLAINED ABOUT TWO GOOD, SHE SAID "OH, THATS WHY - THE FOOD IS MADE WITH LOVE.'
  },
  {
    buttonName: 'm// 007 <br>10x Banking.',
    value: 'THIS IS THE BEST CATERING FOOD I HAVE HAD IN YEARS. ALL THE MEALS WERE ABSOLUTELY DELICIOUS, WELL PRESENTED AND GENEROUS.'
  },
  {
    buttonName: 'm// 008 <br>Brendan D.',
    value: 'GREAT CAUSE, GREAT PEOPLE AND ABSOLUTELY GREAT FOR THE ENVIRONMENT.'
  },
  {
    buttonName: 'm// 009 <br>Trish.',
    value: 'THANK YOU SO VERY MUCH FOR THE BEAUTIFUL GIFT PACKS; MY HEART MELTED. I NEARLY CRIED WHEN I OPENED ONE; I CAN ONLY IMAGINE HOW THE WOMEN IN THE SHELTERS FEEL WHEN THEY RECEIVE SUCH A GIFT.'
  },
  {
    buttonName: 'm// 0010 <br>Amazon.',
    value: 'I WANTED TO SAY A MASSIVE THANK YOU FOR THE ABSOLUTELY BRILLIANT CATERING AT OUR TEAM OFFSITE YESTERDAY. THE FOOD WAS ABSOLUTELY MAGNIFICENT – HIGH QUALITY, FRESH AND DELICIOUS. I HAD SO MANY POSITIVE COMMENTS FROM MY TEAM...I WILL DEFINITELY BE A REPEAT CUSTOMER.'
  },
  {
    buttonName: 'm// 0011 <br>Alix G.',
    value: "LOVE THE QUALITY OF THE FOOD AND LEVEL OF CUSTOMER SERVICE EQUALS THE 'MEANINGFULNESS' OF EVERY PURCHASE."
  },
  {
    buttonName: 'm// 0012 <br>Australian Chamber Orchestra.',
    value: "I CANT THANK YOU ENOUGH FOR THE AMAZING FOOD YOUR TEAM PROVIDED US TODAY. OUR STAFF COULDNT SPEAK HIGHLY ENOUGH OF THE FISH AND THE SALADS; LOOKING FORWARD TO WORKING TOGETHER MORE."
  },
  {
    buttonName: 'm// 0013 <br>WiseTech.',
    value: "BLOWN AWAY BY THE QUALITY OF THE FOOD AND PRESENTATION."
  },
  {
    buttonName: 'm// 0014 <br>Hanadi K.',
    value: "I LOVE THE WAY THEY OPERATE; DONATING IS ONE THING BUT EMPLOYING AND EMPOWERING WOMEN IS SO IMPORTANT."
  },
  {
    buttonName: 'm// 0015 <br>Holly, Purpose Conference.',
    value: "IT WAS AN ABSOLUTE PLEASURE TO PARTNER WITH TWO GOOD CO FOR THE EVENT. YOUR FOOD WAS ABSOLUTELY DELICIOUS! THE FEEDBACK WE HAVE RECEIVED HAS BEEN RESOUNDINGLY POSITIVE - WITH MANY PEOPLE HAVING BEEN DEEPLY TOUCHED BY THE EXPERIENCE."
  },
  {
    buttonName: 'm// 0016 <br>Diane M.',
    value: "I LOVE THE STORY BEHIND THIS BUSINESS AND THE PEOPLE WHO RUN AND WORK IN IT - IT FEELS GOOD TO WORK WITH PEOPLE DOING A GOOD JOB"
  },
  {
    buttonName: 'm// 0017 <br>Barbara.',
    value: "MY PACKAGE JUST ARRIVED AND THE PRESENTATION IS SO BEAUTIFUL...ELEGANT, MAGICAL AND MEANINGFUL AT THE SAME TIME. THANK YOU SO MUCH; WILL BE BACK FOR MORE."
  },
  {
    buttonName: 'm// 0018 <br>Annabel.',
    value: "HOW GOOD IS YOUR COOK BOOK!? OH MY, OH MY; I AM GOING TO HAVE NO ISSUES WORKING MY WAY THROUGH IT THIS YEAR, IT’S ALL SO BLOODY DELICIOUS."
  },
  {
    buttonName: 'm// 0019 <br>Lukus W.',
    value: "AN IMMENSELY GREAT COMPANY... AND WHAT A GREAT CAUSE DRIVING THE BUSINESS."
  },

]


function createButton(value) {
  let button = document.createElement('button');
  button.classList.add('main-button');
  button.innerHTML = `
    <div class="point"></div>
    <p class="button-para">${value.buttonName}</p>
  `;
  return button
}

const addTitle = () =>{
  page4Title.textContent = page3Content[2].value;
  gsap.from(page4Title , {
    transform : 'translateY(100px)',
    opacity : 0,
    duration : 0.5,
  })
}

const addingPointId = () =>{
  let arr = buttonContent.children;
  arr[2].children[0].setAttribute('id' , 'active-point');
}


function updateButton() {
  buttonContent.innerHTML = '';
  page3Content.forEach(value => {
    let button = createButton(value);
    buttonContent.appendChild(button);
  })
  addTitle();
  addingPointId();
}

function moveContent(direction) {
  let value1 = -350;
  let value2 = 350;

  if(window.innerWidth < 400){
    value1 = -136;
    value2 = 136;
  }

  let getDirection = direction === 'left' ? value1 : value2;
  gsap.to(buttonContent.children, {
    transform: `translateX(${getDirection}px)`,
    duration: 0.5,
    ease: 'ease',
    onComplete: () => {
      if (direction === 'left') {
        page3Content.push(page3Content.shift());
      }
      else {
        page3Content.unshift(page3Content.pop());
      }
      updateButton();
    }
  });
}

updateButton()

buttonContent.addEventListener('click', (event) => {
  let buttonIndex = Array.from(buttonContent.children).indexOf(event.target.parentNode);
  if (buttonIndex === 0 || buttonIndex === 1) {
    moveContent('left');
  }
  else if (buttonIndex === 3 || buttonIndex === 4 || buttonIndex === 5) {
    moveContent('right')
  }
})


function onTextArea(){
  document.querySelector('#gmail-text-area').setAttribute('placeholder' , '')
}

gsap.from('.owner-images' , {
  opacity : 0,
  scale : 1.1,
  duration : 0.5,
  stagger : 0.1,
  scrollTrigger: {
    trigger : '.owner-images',
    scroller : '#main',
    start : 'top 60%'
  }
})


gsap.from('.list-01 , .list-02-logo , list-03' , {
  opacity : 0,
  duration : 0.4,
  scrollTrigger: {
    trigger : 'footer',
    scroller : '#main',
    start : 'top 40%'
  }
})

