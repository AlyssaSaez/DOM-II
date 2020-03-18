// Your code goes here


//Fun Bus text transformed when scrolling up and down

const titleH1 = document.querySelector('h1');

window.addEventListener('wheel', e => {
    if (e.wheelDelta === -120) {
        titleH1.textContent = 'Weeeeeeeee';
    } else {
        titleH1.textContent = 'Woooooooooo';
    }
});

//Math random on Nav colors

const navItems = document.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('mousemove', _ => {
        item.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    });

    item.addEventListener('click', e => {
        e.preventDefault();
    });
});

//Random colors on Sign Me Up Buttons

const btn = document.querySelectorAll('.btn');
btn[0].addEventListener('mouseover', _ => {
    btn[0].style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
});

btn[1].addEventListener('mouseover', _ => {
    btn[1].style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
});

btn[2].addEventListener('mouseover', _ => {
    btn[2].style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
});

//Text appears when double clicking on paragraph

const allPara = document.querySelectorAll('p');

allPara[1].addEventListener('dblclick', e => {
    allPara[1].textContent += ' OUCH! STOP POKING ME '
});

//Mock Sign up
const button = document.querySelectorAll('.btn');
button.forEach(node => { node.addEventListener('dblclick', function () { let name = prompt('Enter your name'); let email = prompt('Enter your email'); alert(`Thank you for signing up, ${name}! We will be contacting you shortly.`); }) });

// Transform bottom button text after mousing out

btn[0].addEventListener('mouseout', _ => {
    btn[0].textContent = 'Baby come back';
  });
  
  
  btn[1].addEventListener('mouseout', _ => {
    btn[1].textContent = 'you can blame it';
  });
  
  
  btn[2].addEventListener('mouseout', _ => {
    btn[2].textContent = 'all on me';
  });
  
//Transforms H2 text when copied

const copyTitle = document.querySelector('h2');
copyTitle.addEventListener('copy', _ => {
  copyTitle.textContent = 'Y U DO DIS'
});

// Pop up alert when page loads

window.addEventListener('load', e => {
    alert(`You shall not pass!`)
  });

  //Nav and H2 Animations

TweenMax.from('nav a', 2, { x: -600, y: -50, scale: 0, rotation: 2880, ease: SlowMo.ease.config(0.6, 0.2, false) });
TweenMax.to('nav a', { x: 0, y: 0 });

TweenMax.from('h2', 2, { x: -600, y: -50, scale: 0, rotation: 90, ease: SlowMo.ease.config(0.6, 0.2, false) });
TweenMax.to('h2', { x: 0, y: 0 });

// Changes background color to teal upon double click

document.getElementById('body').addEventListener('dblclick', changeColor);

function changeColor() {
  this.style.backgroundColor = "teal";
  return false;
}

const nava = document.querySelector("a");


//Home button on click
nava.addEventListener('click', e => {
  alert(`Show me what you got!`)
});