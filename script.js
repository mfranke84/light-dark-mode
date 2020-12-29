const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toogle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const quoteGeneratorBtn = document.getElementById('quoteGenerator');
const infinitYScrollBtn = document.getElementById('infinityScroll');
const jokeTellerBtn = document.getElementById('jokeTeller');
const urlQuoteGenerator = 'https://mfranke84.github.io/quote-generator/';
const urlInfinityScroll = 'https://mfranke84.github.io/infinite-scroll/';
const urlJokeTeller = 'https://mfranke84.github.io/joke-teller/';

// Switch pictures
// function modePictures(theme){
//     image1.src = `img/undraw_proud_coder_${theme}.svg`
//     image2.src = `img/undraw_feeling_proud_${theme}.svg`;
//     image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
// }

// Dark Mode style
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    // modePictures('dark');
}

// Light Mode Style
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    // modePictures('light');
}


// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
// quoteGeneratorBtn.addEventListener('click', openProject(urlQuoteGenerator));
quoteGeneratorBtn.addEventListener('click', ()=> {
    window.open(urlQuoteGenerator);
})
infinitYScrollBtn.addEventListener('click', ()=> {
    window.open(urlInfinityScroll);
})
jokeTellerBtn.addEventListener('click', ()=> {
    window.open(urlJokeTeller);
})



// Load current theme from the storeage
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}