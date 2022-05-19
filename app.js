//color flipper
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const secondaryColors = ["red", "green", "#f12379", "blue", "rgba(129, 80, 200)"];
const primaryColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = document.getElementById("random-color");
const primaryColor = document.getElementById('primary-color');
const secondaryColor = document.getElementById('secondary-color');
const color = document.querySelector(".cc");
const colorFlipper = document.querySelector('.color-flipper');


primaryColor.addEventListener('click', () => {
    colorFlipper.style.backgroundColor = primaryColors[getRandomNumber(primaryColors)];
    color.textContent = primaryColors[getRandomNumber(primaryColors)];
});

secondaryColor.addEventListener('click', function() {
    colorFlipper.style.backgroundColor = primaryColors[getRandomNumber(secondaryColors)];
    color.textContent = primaryColors[getRandomNumber(secondaryColors)];
})
randomColor.addEventListener("click", function () {
    let colorCode = '#';

    for(let i = 0; i < 6; i++) {
        colorCode += colors[getRandomNumber(colors)];
    }
    colorFlipper.style.backgroundColor = colorCode;
    color.textContent = colorCode;
});

function getRandomNumber(choice) {
    return Math.floor(Math.random() * choice.length);
}

/*let r = document.getElementById("r");

r += Math.random();
console.log("r");
*/
//COLOR FLIPPER END

//ALPHABETS
const displayAlphabet = document.querySelector(".display-alphabet");
// const begin = document.querySelector(".begin");
// const decrease = document.querySelector(".decrease");
// const randomAplhaBtn = document.querySelector(".random");
// const increase = document.querySelector(".increase");
// const end = document.querySelector(".end");
const btns = document.querySelectorAll('.btn');
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let count = 0;

// randomAplhaBtn.addEventListener('click', function () {
//     const random = getRandomNumber(alphabets);

//     displayAlphabet.textContent = alphabets[random];
// });

btns.forEach(function(btn) {
    btn.addEventListener('click', function () {
        const btnStyle = btn.classList;
        if(btnStyle.contains('begin')) {
            count = 0;
        }else if(btnStyle.contains('decrease')) {
            count--;
            if(count < 0) {
                count = alphabets.length - 1;
            }
        }else if(btnStyle.contains('increase')) {
            count++;
            if(count > alphabets.length - 1) {
                count = 0;
            }
        }else if(btnStyle.contains('end')) {
            count = alphabets.length - 1;
        }else if(btnStyle.contains('random')){
            count = getRandomNumber(alphabets);
        }

        displayAlphabet.textContent = alphabets[count];
        displayAlphabet.classList.add('show-display-alphabet');
    });
});
//END OF ALPHABETS

//REVIEWS
const reviewsArr = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 46,
        img: './images/john.png',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
        Quidem officiis hic odit ex alias minima, magnam consequatur doloremque.\
        Corrupti, blanditiis!'
    },
    {
        firstName: 'jane',
        lastName: 'doe',
        age: 36,
        img: './images/jane.png',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
        Quidem officiis hic odit ex alias minima, magnam consequatur doloremque.\
        Corrupti, blanditiis!'
    },
    {
        firstName: 'james',
        lastName: 'doe',
        age: 16,
        img: './images/james.png',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
        Quidem officiis hic odit ex alias minima, magnam consequatur doloremque.\
        Corrupti, blanditiis!'
    },
    {
        firstName: 'jessica',
        lastName: 'doe',
        age: 6,
        img: './images/jessica.png',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
        Quidem officiis hic odit ex alias minima, magnam consequatur doloremque.\
        Corrupti, blanditiis!'
    }
];
const prevBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const img = document.getElementById('img-review');
const details = document.querySelector('.review-deets');
const idInfo = document.getElementById('id-info');

window.addEventListener('DOMContentLoaded', function() {
    showReviewee(1);
});
function showReviewee(person) {
    img.src = reviewsArr[person].img;
    // console.log(count);
    details.textContent = reviewsArr[person].description;
    idInfo.textContent = reviewsArr[person].firstName + ' ' + reviewsArr[person].lastName + ', '
    + reviewsArr[person].age;
}


nextBtn.addEventListener('click', function() {
    count++;
    if(count > reviewsArr.length - 1) {
        count = 0;
    }
    showReviewee(count);
});
prevBtn.addEventListener('click', function() {
    count--;
    if(count < 0) {
        count = reviewsArr.length - 1;
    }
    showReviewee(count);
});

randomBtn.addEventListener('click', function() {
    count = getRandomNumber(reviewsArr);
    showReviewee(count);
});
//end of reviews

//navbar
const nav = document.getElementById('main-nav');
const menuBtn = document.getElementById('menu-btn');
const section = document.getElementsByTagName('section');
const navContainer = document.querySelector('.nav-container');
const changeMenu = document.querySelector('.change-menu');
const menuA = changeMenu.querySelector('.menu-a');
const menuB = changeMenu.querySelector('.menu-b');
const links = navContainer.querySelector('.links');
let text = '';

for(let i = 0; i < section.length; i++) {
    if(section[i].classList.contains('navbar') || section[i].classList.contains('modal')) {
        continue;
    }else{
        text += `<li class="links-list"><a href=#${section[i].id}>
        ${section[i].firstElementChild.innerHTML}
        </a></li>` + '<br>';
    }
}
links.innerHTML = text;

menuA.addEventListener('click', function() {
    changeMenu.classList.remove('hide');
    links.innerHTML = text;
});

menuB.addEventListener('click', function() {
    changeMenu.classList.add('hide');
    links.innerHTML = `<ul class="links">
    <li class="links-list">tester</li>
    <li class="links-list">
        color flipper
        <ul>
            <li class="links-list"><a href="index.html">simple</a></li>
            <li class="links-list"><a href="hex.html">hex</a></li>
        </ul>
    </li>
    <a href="#alphabets"><li class="links-list">alphabets</li></a>
    <a href="#reviews"><li class="links-list">reviews</li></a>
    </ul>`
});

window.addEventListener('scroll', function(){
    const navHeight = nav.getBoundingClientRect().height;
    if(this.window.scrollY > navHeight) {
        nav.classList.add('fixed-nav');
    }else{
        nav.classList.remove('fixed-nav');
    }
});
const linksList = document.querySelectorAll('.links-list');
linksList.forEach(function(list) {
    list.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.currentTarget.firstChild.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        const navHeight = nav.getBoundingClientRect().height;
        const navContainerHeight = navContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        
        if (navHeight > 91) {
            position = position + navContainerHeight;
        }
        
        window.scrollTo({
            left: 0,
            top: position
        });
        nav.classList.remove('show');
    });
});


menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
});



// const menuArr = Array.prototype.slice.call(section);

// console.log(menuArr);

// navContainer.innerHTML = menuArr.map(function(item) {
//     return `<a href=${item}><li>${item}</li></a>`
// });

// end of navbar

//modal
const displayModal = document.getElementById('modal-display');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const contactBtn = document.getElementById('contact-btn');

// setTimeout(setDisplayModal, 5000);
function setDisplayModal() {
    modal.classList.add('show-modal');
}

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});

contactBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});
//end of modal

//questions
const questionBox = document.querySelectorAll('.question-box');
// const questionsBtns = document.querySelectorAll('.questions-btn');

questionBox.forEach(function(question) {
    const btn = question.querySelector('.questions-btn');

    btn.addEventListener('click', function() {
        questionBox.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('hide');
            }
        });
        question.classList.toggle('hide');
    });
});

// questionsBtns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('hide');
//     })
// })

//end_of_questions

// video
const switchBtn = document.querySelector('.switch-btn');
const runManVideo = document.querySelector('.run-man');

switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('slide');
    if(switchBtn.classList.contains('slide')) {
        runManVideo.pause();
    }else{
        runManVideo.play();
    }
});
// enf of video