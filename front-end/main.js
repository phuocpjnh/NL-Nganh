
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

  
document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.card');
  const closeShopingButton = document.querySelector('.closeShoping');
  const showCardButton = document.getElementById('showCardButton');
  const addToCartButtons = document.querySelectorAll('.addToCart');
  // Bắt sự kiện click vào nút "Close" để ẩn `.card`
  closeShopingButton.addEventListener('click', function() {
      card.style.display = 'none'; // Ẩn `.card`
      
  });
  showCardButton.addEventListener('click', function() {
    card.style.display = 'block'; // Hiển thị `.card`
  });

  
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
      // Hiển thị form đăng nhập và ẩn form đăng ký
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
      // Hiển thị modal
      loginModal.style.display = 'block';
  });
    // Ẩn form đăng ký khi trang được tải
    registerForm.style.display = 'none';

    // Thêm sự kiện click cho các nút chuyển đổi
    switchButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Nếu đang hiển thị form đăng ký, ẩn nó và hiển thị form đăng nhập, và ngược lại
            if (loginForm.style.display === 'none') {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            }
        });
    });

    // Thêm sự kiện click cho nút "Đăng ký" trong form đăng nhập
    const registerButtonInLoginForm = document.querySelector('#loginForm .auth-form__swtich-btn'); 
    registerButtonInLoginForm.addEventListener('click', function() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Thêm sự kiện click cho nút "Đăng nhập" trong form đăng ký
    const loginButtonInRegisterForm = document.querySelector('#registerForm .auth-form__swtich-btn');
    loginButtonInRegisterForm.addEventListener('click', function() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

   

    modalOverlay.addEventListener('click', function(event) {
      // Kiểm tra xem click có diễn ra bên ngoài cả hai form không
      if (loginModal.contains(event.target)) {
          // Ẩn cả form đăng nhập và đăng ký khi click bên ngoài form modal
          loginModal.style.display = 'none';
         
      }
  });
  modalOverlay.addEventListener('click', function(event) {
    // Kiểm tra xem click có diễn ra bên ngoài cả hai form không
    if (loginModal.contains(event.target)) {
        // Ẩn cả form đăng nhập và đăng ký khi click bên ngoài form modal
        loginModal.style.display = 'none';
       
    }
});

});

 const btn = document.querySelectorAll("button")
 btn.forEach(function(button,index){
  button.addEventListener("click",function(event){
    
  })
 })



  animate.reveal(".nav");
  animate.reveal(".home-text", {origin:"left"});
  animate.reveal(".home-img", {origin:"bottom"});
  animate.reveal(".ser-box , .product-box, .team-box, .book-data", {interval: 100});