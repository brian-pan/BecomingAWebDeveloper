const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     console.log(img.src);
//     img.src = 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667__480.jpg'
//     //you selected them all, b/c we use getElement by Tag Name
// }
//Each thing in a HTMLCollection is an element

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667__480.jpg';
}

document.querySelector('a[title="Java"]');


const links = document.querySelectorAll('p a');//all a inside p

for (let link of links) {
    console.log(link.href)
}

//how to select using the type attribute:
const checkbox = document.querySelector(`[type='checkbox']`);

//select h1
const h1 = document.querySelector('h1')
//dont confuse h1 in css and h1 variable in JS!
h1.style.color = 'green';
h1.style.fontSize = '3em';
h1.style.border = '2px solid pink';

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'red';
    link.style.textDecorationStyle = 'wavy';
}

//Apply a CSS class (.xxx) using JS:
const h2 = document.querySelector('h2');
h2.getAttribute('class'); //see if any class previously
h2.setAttribute('class', 'purple'); //it works
h2.setAttribute('class', 'border'); //overlapped previous class
//annoying way:
let currentClasses = h2.getAttribute('class');
h2.setAttribute('class', `${currentClasses} purple`);
//better way, use classList:
// h2.classList
h2.classList.add('purple');
h2.classList.remove('purple');
h2.classList.contains('border'); //boolean
h2.classList.toggle('purple'); //if exist, then remove class
h2.classList.toggle('purple'); //if not exist, then add class

//parent element (traverse upwards)
const firstBold = document.querySelector('b');
firstBold.parentElement;
firstBold.parentElement;
//child element (a parent can have multiple children)
const paragraph = firstBold.parentElement;
paragraph.children;
paragraph.children[0];
paragraph.children[0].parentElement;
//sibiling
const squareImg = document.querySelector('.square');
squareImg.previousSibling; // return a node (represent text)
squareImg.nextSibling; // return a node
squareImg.previousElementSibling; //generally use
squareImg.nextElementSibling;

