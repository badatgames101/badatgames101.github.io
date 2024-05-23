const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//do later//
const aboutMe = document.querySelector('#aboutMeSeciton');
const aboutme_section = document.querySelector('.aboutMeSeciton');

VBscroll.addEventListener('click', () => {
   if(document.getElementById('aboutme_section').style.opacity = 0.1 ) {
    document.getElementById('aboutme_section').style.transform = "600px";
   } else {
    document.getElementById(aboutme_section).style.transform = "200px";
   }
});

