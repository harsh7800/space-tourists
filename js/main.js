const menubtn = document.getElementById('menubtn');
const navbar = document.querySelector('.navbar');
const navbtn = document.getElementById('navbtn')

menubtn.addEventListener('click', () => {
      const visibility = navbar.getAttribute("data-visible");
      if (visibility === "false") {
            navbar.setAttribute('data-visible', true)
            menubtn.setAttribute('aria-expanded', true)
      } else {
            navbar.setAttribute('data-visible', false)
            menubtn.setAttribute('aria-expanded', false)
      }
});

navbtn.forEach(navbtn => {
      navbtn.addEventListener('click', () => {
            navbtn.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
      });
});

