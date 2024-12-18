/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

var contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    var hasEmptyField = false;

    if (name === "") {
      nameInput.style.borderColor = "red";
      hasEmptyField = true;
    } else {
      nameInput.style.borderColor = "";
    }

    if (email === "") {
      emailInput.style.borderColor = "red";
      hasEmptyField = true;
    } else {
      emailInput.style.borderColor = "";
    }

    if (message === "") {
      messageInput.style.borderColor = "red";
      hasEmptyField = true;
    } else {
      messageInput.style.borderColor = "";
    }

    if (hasEmptyField) {
      return false;
    }

    contactForm.submit();
  });
}
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    themeToggle.innerHTML = isDarkMode ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
    localStorage.setItem('theme', isDarkMode ? 'dark' : '');
});
