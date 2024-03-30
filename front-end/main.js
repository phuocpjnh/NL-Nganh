
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //Menu Open Close
  let menu = document.querySelector(".menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () =>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
  };

  //Menu close When Scroll
  window.onscroll = () =>{
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
  } 

  //Sroll Animation   
  const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2000',
    delay: '400',
  });

  // login
  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchButtons = document.querySelectorAll('.auth-form__switch-btn');
    const modalOverlay = document.querySelector('.modal__overlay');
    const loginModal = document.getElementById('loginModal');
    const iconUser = document.querySelector('.bx-user');

    iconUser.addEventListener('click', function() {
     
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
     
      loginModal.style.display = 'block';
  });
    
    registerForm.style.display = 'none';

    
    switchButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (loginForm.style.display === 'none') {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            }
        });
    });

    const registerButtonInLoginForm = document.querySelector('#loginForm .auth-form__swtich-btn'); 
    registerButtonInLoginForm.addEventListener('click', function() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    const loginButtonInRegisterForm = document.querySelector('#registerForm .auth-form__swtich-btn');
    loginButtonInRegisterForm.addEventListener('click', function() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

   

    modalOverlay.addEventListener('click', function(event) {
      if (loginModal.contains(event.target)) {
          loginModal.style.display = 'none';
         
      }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const closeShopingButton = document.querySelector('.closeShoping');
    const showCardButton = document.getElementById('showCardButton');

    // Bắt sự kiện click vào nút "Close" để ẩn `.card`
    closeShopingButton.addEventListener('click', function() {
        card.style.display = 'none'; // Ẩn `.card`
    });

    // Bắt sự kiện click vào nút "Mở Card" để hiển thị `.card`
    showCardButton.addEventListener('click', function() {
        card.style.display = 'block'; // Hiển thị `.card`
    });
  });
   
});


  animate.reveal(".nav");
  animate.reveal(".home-text", {origin:"left"});
  animate.reveal(".home-img", {origin:"bottom"});
  animate.reveal(".ser-box , .product-box, .team-box, .book-data", {interval: 100});