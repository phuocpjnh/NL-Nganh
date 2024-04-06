
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
  
  document.addEventListener("DOMContentLoaded", function() {
    var showCardButton = document.getElementById("showCardButton");
    var shopingSection = document.querySelector(".shoping");

    // Thêm sự kiện click vào biểu tượng mua sắm
    showCardButton.addEventListener("click", function() {
        // Kiểm tra xem phần giỏ hàng đang hiển thị hay không
        var isHidden = shopingSection.classList.contains("hidden");

        // Nếu đang ẩn, hiển thị phần giỏ hàng
        if (isHidden) {
            shopingSection.classList.remove("hidden");
        } else {
            // Nếu đang hiển thị, ẩn đi phần giỏ hàng
            shopingSection.classList.add("hidden");
        }
    });
  });
const showCardButton = document.getElementById('showCardButton');
const card = document.querySelector('.card');
const closeShoping = document.querySelector('.closeShoping');

showCardButton.addEventListener('click', function() {
  
  card.style.display = 'block';
});
closeShoping.addEventListener('click', function() {
  card.style.display = 'none';
});

const productBoxes = document.querySelectorAll('.product-box');

productBoxes.forEach(function(productBox) {
    const btn = productBox.querySelector('.btn_cart');
    btn.addEventListener('click', function(event) {
        var btnItem = event.target;
        var product = btnItem.closest('.product-box');
        var productImg = product.querySelector("img");
        var productName = product.querySelector("h2").textContent;
        var productPrice = product.querySelector("span").textContent

        // console.log(productImg,productName,productPrice);
        addcart(productImg,productName,productPrice)
    });
});

function addcart(productImg,productName,productPrice) {
  var img = document.createElement("img");
    img.src = productImg;
    img.style.width = "50px"; 
    img.style.height = "auto";
  var addtr = document.createElement("tr")
  var trcontent = ' <tr><td style="display: flex; align-items: center;height: auto;width: 60px;margin-left: 5px;"><img src="'+productImg+'" alt="" style="width: 50px; height: auto;"><span style="white-space: nowrap;margin-left: 12px;">'+productName+'</span></td><td style="text-align: center;"><p><span>'+productPrice+'</span><sup>Đ</sup></p></td><td style="text-align: center;"><input style="width: 30px;"type="number" value="1" min="1"> </td><td style="cursor: pointer;text-align:center">Xóa</td></tr>'
  addtr.innerHTML = trcontent
  var cartTable = document.querySelector("tbody")
  
  cartTable.append(addtr)
}

  


});
  animate.reveal(".nav");
  animate.reveal(".home-text", {origin:"left"});
  animate.reveal(".home-img", {origin:"bottom"});
  animate.reveal(".ser-box , .product-box, .team-box, .book-data", {interval: 100});