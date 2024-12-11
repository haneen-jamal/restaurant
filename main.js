function countUp(el, target) {
    let current = 0; // البداية من الصفر
    const increment = Math.ceil(target / 100); // تحديد مقدار الزيادة في كل خطوة
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval); // إيقاف العداد عند الوصول للهدف
        }
        el.innerText = current.toLocaleString(); // تحديث النص في العنصر
    }, 20); // تحديث كل 20 مللي ثانية
}

function startCountUpOnView() {
    const counters = document.querySelectorAll('[data-countup]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target.querySelector('h3');
                const target = parseInt(entry.target.dataset.countup, 10);
                countUp(el, target);
                observer.unobserve(entry.target); // إلغاء المراقبة بعد بدء العداد
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// تفعيل العداد عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', startCountUpOnView);

// swiper js
var swiper = new Swiper(".mySwiper-img2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween:0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });
  



  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };
  
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



  
  
//   window.addEventListener('scroll', function() {
//     const sections = document.querySelectorAll('.sectionSC');
//     const navLinks = document.querySelectorAll('.nav-link');

//     let currentSection = '';

//     sections.forEach(sectionSC => {
//         const sectionTop = sectionSC.offsetTop - window.innerHeight / 2;

//         if (window.scrollY >= sectionTop) {
//             currentSection = sectionSC.getAttribute('id');
//         }
//     });

//    navLinks.forEach(link => {
//        link.classList.remove('active');
//        if (link.getAttribute('href').substring(1) === currentSection) {
//            link.classList.add('active');
//        }
//    });
// });
