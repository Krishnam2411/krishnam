const toggle = document.querySelector(".switch");
const darkm='Static/images/dark-mode-night-moon-svgrepo-com.svg';
const lightm='Static/images/light-mode-svgrepo-com.svg';
const toggleImage=document.getElementById('mode_img');
const root=document.querySelector(':root');
const icons=document.querySelectorAll('.socials');

toggle.addEventListener("click",()=>{
    if(toggleImage.getAttribute('src') === lightm){
        toggleImage.src = darkm;
        root.style.setProperty('--primary-clr1','#ffffff');
        root.style.setProperty('--secondary-clr','#000000');
        icons.forEach((icon) => {
            icon.classList.add('invert');
        });
    }
    else{
        toggleImage.src = lightm;
        root.style.setProperty('--primary-clr1','#000000');
        root.style.setProperty('--secondary-clr','#f0f0f0');
        icons.forEach((icon) => {
            icon.classList.remove('invert');
        });
    }
});