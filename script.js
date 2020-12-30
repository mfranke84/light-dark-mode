const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toogle-icon');
const textBox = document.getElementById('text-box');

const urlQuoteGenerator = 'https://mfranke84.github.io/quote-generator/';
const urlInfinityScroll = 'https://mfranke84.github.io/infinite-scroll/';
const urlJokeTeller = 'https://mfranke84.github.io/joke-teller/';

// Switch pictures
// function modePictures(theme){
//     image1.src = `img/undraw_proud_coder_${theme}.svg`
//     image2.src = `img/undraw_feeling_proud_${theme}.svg`;
//     image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
// }

// Toggle dark and light mode
function setTheme(theme){
    if (theme === 'light'){
        isLight = true;
    } else{
        isLight = false;
    }
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode': 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon','fa-sun') : toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
}

// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme',DARK_THEME);
        localStorage.setItem('theme',DARK_THEME);
        setTheme(DARK_THEME);
    } else{
        document.documentElement.setAttribute('data-theme',LIGHT_THEME);
        localStorage.setItem('theme',LIGHT_THEME);
        setTheme(LIGHT_THEME);
    }
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Load current theme from the storeage
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME){
        toggleSwitch.checked = true;
        setTheme(DARK_THEME);
    }
}