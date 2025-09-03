function nextPage(name){
    switch(name){
        case 'next':
            document.querySelector('.pictures').style.display = 'none';
            document.querySelector('.next').style.display = 'none';
            document.querySelector('.pictures2').style.display = 'flex';
            document.querySelector('.last').style.display = 'flex';
            break;
        case 'last':
            document.querySelector('.pictures2').style.display = 'none';
            document.querySelector('.last').style.display = 'none';
            document.querySelector('.pictures').style.display = 'flex';
            document.querySelector('.next').style.display = 'flex';
            break;
        default:

            break;
    }
}
function nextPageMobile(name){
    switch(name){
        case 'next':
            document.querySelector('.pictures-mobile').style.display = 'none';
            document.querySelector('.prod-btn-mobile .next').style.display = 'none';
            document.querySelector('.pictures-mobile2').style.display = 'flex';
            document.querySelector('.next-mobile').style.display = 'flex';
            break;
        case 'last':
            document.querySelector('.pictures-mobile2').style.display = 'none';
            document.querySelector('.prod-btn-mobile .last').style.display = 'none';
            document.querySelector('.pictures-mobile').style.display = 'flex';
            document.querySelector('.prod-btn-mobile .next').style.display = 'flex';
            break;
        case 'next-mobile':
            document.querySelector('.pictures-mobile2').style.display = 'none';
            document.querySelector('.next-mobile').style.display = 'none';
            document.querySelector('.pictures-mobile3').style.display = 'flex';
            document.querySelector('.last-mobile').style.display = 'flex';
            break;
        case 'last-mobile':
            document.querySelector('.pictures-mobile3').style.display = 'none';
            document.querySelector('.last-mobile').style.display = 'none';
            document.querySelector('.pictures-mobile2').style.display = 'flex';
            document.querySelector('.prod-btn-mobile .last').style.display = 'flex';
            break;
        default:

            break;
    }
}

var click_flag = false;
var last_click = null;



const items = document.querySelectorAll(".menu li a");
const img = document.querySelector(".slider-btn img")

items.forEach(item => {
  item.addEventListener("click", () => {
    // skloni 'active' sa svih
    items.forEach(i => i.classList.remove("active"));
    // dodaj 'active' na kliknuti
    item.classList.add("active");
  });
});

 document.querySelector(".slider-btn").addEventListener("mouseover", () => {
    img.src = "../assets/img/shop/fluent-emoji-flat_paw-prints.svg"; // nova slika na hover
  });

  document.querySelector(".slider-btn").addEventListener("mouseout", () => {
    img.src = "../assets/img/header/Vector.svg"; // vrati staru kad miš izađe
  });

const services = document.querySelectorAll(".together")

services.forEach(service => {
  service.addEventListener("mouseover", () => {
    service.querySelector(".hidden-text").style.display = "flex";
  });

  service.addEventListener("mouseout", () => {
    service.querySelector(".hidden-text").style.display = "none";
  });
});

function openMenu(selector) {
  const menu = document.querySelector(selector);

  // Zatvori sve ostale otvorene menije
  document.querySelectorAll("ul li ul").forEach(el => {
    if (el !== menu) {
      el.style.display = "none";
    }
  });

  // Toggle trenutnog
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}


// function scrollTo(scroll_name) {
//   const el = document.querySelector(`.${scroll_name}`);
//     if (el) {
//     el.scrollIntoView({ behavior: "smooth" }); // glatki scroll
//   }
// }
document.querySelectorAll('.pic-item, .pic-item1, .pic-item2').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const card = item.querySelector('.shop-card');
    if (card) card.style.display = 'flex';
  });

  item.addEventListener('mouseleave', () => {
    const card = item.querySelector('.shop-card');
    if (card) card.style.display = 'none';
  });
});



document.querySelectorAll('.shop-card').forEach(card => {
  const plus = card.querySelector('.plus');
  const minus = card.querySelector('.minus');
  const count = card.querySelector('.count');
  const addToCartBtn = card.querySelector('.add-to-cart');

  plus.addEventListener('click', (e) => {
    e.preventDefault();
    let value = parseInt(count.textContent);
    count.textContent = value + 1;
  });

  minus.addEventListener('click', (e) => {
    e.preventDefault();
    let value = parseInt(count.textContent);
    if (value > 1) {
      count.textContent = value - 1;
    }
  });

  addToCartBtn.addEventListener('click', () => {
    const notification = document.getElementById('notification');
    notification.textContent = "Successfully added to cart ✅"; // engleski tekst
    notification.classList.add('show');

    count.textContent = 1;
    // hide after 2s
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
  });
});

function openContainer(name){
    switch(name){
        case 'random':
            document.querySelector(`.${name}`)
            break;
        case 'cat':
            document.querySelector('.pictures2').style.display = 'none';
            document.querySelector('.last').style.display = 'none';
            document.querySelector('.pictures').style.display = 'flex';
            document.querySelector('.next').style.display = 'flex';
            break;
        case 'dog':
            document.querySelector('.pictures2').style.display = 'none';
            document.querySelector('.last').style.display = 'none';
            document.querySelector('.pictures').style.display = 'flex';
            document.querySelector('.next').style.display = 'flex';
            break;
        case 'fish':
            document.querySelector('.pictures2').style.display = 'none';
            document.querySelector('.last').style.display = 'none';
            document.querySelector('.pictures').style.display = 'flex';
            document.querySelector('.next').style.display = 'flex';
            break;
        case 'bird':
            document.querySelector('.pictures2').style.display = 'none';
            document.querySelector('.last').style.display = 'none';
            document.querySelector('.pictures').style.display = 'flex';
            document.querySelector('.next').style.display = 'flex';
            break;
        default:

            break;
    }
}





document.addEventListener("DOMContentLoaded", () => {
  const formBtn = document.getElementById('blog-btn');

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const checkInput = document.getElementById('check');

    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const check = checkInput.checked;

    // Regex obrasci
    const nameRegex = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,20}$/;  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /^.{10,500}$/;

    // Validacija
    if (!nameRegex.test(fname)) {
      alert("First name must start with a capital letter and have at least 2 characters.");
      return;
    }

    if (!nameRegex.test(lname)) {
      alert("Last name must start with a capital letter and have at least 2 characters.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!messageRegex.test(message)) {
      alert("Message must be between 10 and 500 characters.");
      return;
    }

    if (!check) {
      alert("You must agree to the privacy policy.");
      return;
    }

    // Ako je sve ok
    alert("Form submitted successfully ✅");

    // Brisanje podataka iz forme
    fnameInput.value = '';
    lnameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    checkInput.checked = false;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.mobile-menu');
  const navItems = document.querySelector(' .nav-left-mobile .nav-items');

  burger.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });
});


// function showSection(link) {
//   const targetId = link.getAttribute("data-target");
//   const allLinks = document.querySelectorAll(".menu a");
//   const allSections = document.querySelectorAll(".content, .random");

//   // skini active sa svih linkova
//   allLinks.forEach(l => l.classList.remove("active"));
//   link.classList.add("active");

//   // sakrij sve sekcije
//   allSections.forEach(sec => sec.classList.remove("active"));

//   // prikaži samo target
//   const target = document.getElementById(targetId);
//   if (target) {
//     target.classList.add("active");
//   }
// }


window.onload = function () {
  const emailInput = document.getElementById("newsletterEmail");
  const subscribeBtn = document.getElementById("subscribeBtn");
  const toast = document.getElementById("toast");

  subscribeBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      showToast("Successfully subscribed ✅", "success");
      emailInput.value = "";
    } else {
      showToast("Please enter a valid email ❌", "error");
    }
  });

  function showToast(message, type) {
    toast.textContent = message;
    toast.style.display = "block";
    toast.style.background = type === "success" ? "#28a745" : "#dc3545";

    toast.style.animation = "none";
    toast.offsetHeight; // reset animacije
    toast.style.animation = "fadeInOut 3s ease forwards";

    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  }
};