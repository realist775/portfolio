
const counters = document.querySelectorAll(".circle");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const circle = entry.target;
        const progress = circle.querySelector(".progress");
        const number = circle.querySelector(".number");
        const percent = +circle.getAttribute("data-percentage");

        let current = 0;
        const interval = setInterval(() => {
          if (current >= percent) {
            clearInterval(interval);
          } else {
            current++;
            number.textContent = `${current}%`;
            progress.style.strokeDashoffset = 314 - (314 * current) / 100;
          }
        }, 20); // speed
        observer.unobserve(circle);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((circle) => {
  observer.observe(circle);
});


function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('open');
}


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const items = document.querySelectorAll(".portfolio_items .item");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".filter-buttons .active").classList.remove("active");
      button.classList.add("active");

      const filter = button.dataset.filter;

      items.forEach(item => {
        const show =
          filter === "all" ||
          item.classList.contains(filter) ||
          (filter === "website" && item.classList.contains("newwebsite"));

        item.style.display = show ? "block" : "none";
      });
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-menu');

  // faqat button va nav mavjud bo‘lsa ishlaydi
  if (button && nav) {
    button.onclick = function () {
      nav.classList.toggle('show');

      const icon = button.querySelector('i');
      if (icon) {
        if (icon.classList.contains('fa-bars')) {
          icon.classList.replace('fa-bars', 'fa-x');
        } else {
          icon.classList.replace('fa-x', 'fa-bars');
        }
      }
    };
  }
});


window.addEventListener("load", function () {
  setTimeout(function () {
    let loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
    }
  }, 2000);
});
