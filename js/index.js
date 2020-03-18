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