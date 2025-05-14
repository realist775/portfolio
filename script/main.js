document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn_top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});




function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function toggleHamburgerMenu() {
  const header = document.querySelector('.head');
  header.classList.toggle('header-active');
}

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  const isVisible = menu.style.display === "block";
  menu.style.display = isVisible ? "none" : "block";
}




// Tashqariga bosganda dropdownni yopish
document.addEventListener("click", function (event) {
  const toggle = document.querySelector(".dropdown-toggle");
  const menu = document.getElementById("dropdownMenu");

  if (!toggle.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = "none";
  }
});

// Search funksiyasi
function searchNow() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    alert(`검색: "${query}"`);
    // Istasangiz shu yerda window.location.href bilan boshqa sahifaga yuborishingiz mumkin
  }
}

// FAQ
document.querySelectorAll(".faq_question").forEach((question) => {
  question.addEventListener("click", () => {
    document.querySelectorAll(".faq_question").forEach((q) => {
      if (q !== question) q.classList.remove("active");
    });
    question.classList.toggle("active");
  });
});

// Call FAQ
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// TICKET_OPTION PAGE
const prices = {
  "성인 티켓": 29000,
  "청소년 티켓": 19000,
  "VIP 티켓": 69000,
};

let selectedTicket = "성인 티켓";
let quantity = 1;

const priceDisplay = document.querySelector(".price");
const ticketButtons = document.querySelectorAll(".ticket-types button");
const quantityInput = document.querySelector(".selector input");
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

if (
  priceDisplay &&
  ticketButtons.length > 0 &&
  quantityInput &&
  mainImage &&
  thumbnails.length > 0
) {
  function updatePrice() {
    const unitPrice = prices[selectedTicket];
    const totalPrice = unitPrice * quantity;
    priceDisplay.textContent = `${totalPrice.toLocaleString()}원`;
  }

  ticketButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ticketButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      selectedTicket = button.textContent.trim();
      updatePrice();
    });
  });

  quantityInput.addEventListener("input", () => {
    const value = parseInt(quantityInput.value);
    quantity = isNaN(value) ? 1 : Math.max(1, value);
    updatePrice();
  });

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      thumbnails.forEach((img) => img.classList.remove("active"));
      thumbnail.classList.add("active");

      mainImage.src = thumbnail.src;
    });
  });
  updatePrice();
}
// TICKET_OPTION PAGE

const prices_1 = {
  "성인 티켓": 5_000,
  "청소년 티켓": 2_000,
  "VIP 티켓": 10_000,
};

let selectedTicket_1 = "성인 티켓";
let quantity_1 = 1;

const priceDisplay_1 = document.querySelector(".ticket-price");
const ticketButtons_1 = document.querySelectorAll(".ticket-options button");
const quantityInput_1 = document.querySelector(".time-selector input");
const mainImage_1 = document.getElementById("mainImage");
const thumbnails_1 = document.querySelectorAll(".image-thumbnails img");

if (
  priceDisplay_1 &&
  ticketButtons_1.length > 0 &&
  quantityInput_1 &&
  mainImage_1 &&
  thumbnails_1.length > 0
) {
  function updatePrice_1() {
    const unitPrice_1 = prices_1[selectedTicket_1];
    const totalPrice_1 = unitPrice_1 * quantity_1;
    priceDisplay_1.textContent = `${totalPrice_1.toLocaleString()}원`;
  }

  ticketButtons_1.forEach((button) => {
    button.addEventListener("click", () => {
      ticketButtons_1.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      selectedTicket_1 = button.textContent.trim();
      updatePrice_1();
    });
  });

  quantityInput_1.addEventListener("input", () => {
    const value = parseInt(quantityInput_1.value);
    quantity_1 = isNaN(value) ? 1 : Math.max(1, value);
    updatePrice_1();
  });

  thumbnails_1.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      thumbnails_1.forEach((img) => img.classList.remove("active"));
      thumbnail.classList.add("active");

      mainImage_1.src = thumbnail.src;
    });
  });

  updatePrice_1();
}

// Target sana
document.addEventListener("DOMContentLoaded", function () {
  // Countdown elements
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  // Countdown target date (set your desired target)
  const targetDate = new Date("2025-12-10T00:00:00").getTime();

  // Function to update countdown
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Set countdown values
    if (daysEl && hoursEl && minutesEl && secondsEl) {
      daysEl.innerText = days < 10 ? "0" + days : days;
      hoursEl.innerText = hours < 10 ? "0" + hours : hours;
      minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
      secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // If the countdown is finished
    if (distance < 0) {
      clearInterval(countdownInterval);
      daysEl.innerText =
        hoursEl.innerText =
        minutesEl.innerText =
        secondsEl.innerText =
          "00";
    }
  }

  // Update countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to display countdown immediately
});

// EVENT_ABOUT_2
document.addEventListener("DOMContentLoaded", () => {
  const events = {
    "2025-06-09": [
      {
        time: "18:00시",
        title: "특별한 이벤트",
        tags: ["오프라인", "온라인"],
        speaker: "강연자A",
        location: "장소A",
      },
      {
        time: "19:00시",
        title: "특별한 이벤트",
        tags: ["온라인"],
        speaker: "강연자B",
        location: "장소B",
      },
      {
        time: "20:30시",
        title: "특별한 이벤트",
        tags: ["온라인"],
        speaker: "강연자C",
        location: "장소C",
      },
    ],
    "2025-07-10": [
      {
        time: "오전 7시",
        title: "여름 스페셜",
        tags: ["오프라인"],
        speaker: "강연자D",
        location: "장소D",
      },
      {
        time: "오전 11시",
        title: "여름 이벤트",
        tags: ["온라인"],
        speaker: "강연자E",
        location: "장소E",
      },
    ],
    "2025-08-11": [
      {
        time: "오전 6시",
        title: "가을 시작 이벤트",
        tags: ["오프라인", "온라인"],
        speaker: "강연자F",
        location: "장소F",
      },
    ],
  };

  const buttons = document.querySelectorAll(".date-buttons button");
  const eventList = document.getElementById("eventList");

  if (!eventList) {
    console.error("Event list element not found!");
    return;
  }

  const defaultDate = "2025-06-09";
  buttons.forEach((button) => {
    if (button.getAttribute("data-date") === defaultDate) {
      button.classList.add("active");
    }
  });

  renderEvents(defaultDate);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const date = button.getAttribute("data-date");
      renderEvents(date);
    });
  });

  function renderEvents(date) {
    const items = events[date] || [];
    // Check if there are no events for the selected date
    if (items.length === 0) {
      eventList.innerHTML = "<p>선택된 날짜에는 이벤트가 없습니다.</p>";
      return;
    }

    eventList.innerHTML = items
      .map(
        (item) => `
      <div class="event-item">
        <div class="event-time">${item.time}</div>
        <div class="event-title">
          ${item.title}
          <div class="event-tags">
            ${item.tags
              .map(
                (tag) =>
                  `<span class="event-tag ${
                    tag === "온라인" ? "online" : "offline"
                  }">${tag}</span>`
              )
              .join("")}
          </div>
        </div>
        <div class="event-speaker">${item.speaker}</div>
        <div class="event-location">${item.location}</div>
        <div class="event-detail-btn">
          <button>자세히 보기</button>
        </div>
      </div>
    `
      )
      .join("");
  }
});

// EVENT_ABOUT_2

//EVENT

function showEvents(category) {
  const eventsSection = document.getElementById("events");
  eventsSection.innerHTML = "";

  let events = [];

  if (category === "all") {
    events = [
      {
        title: "수영",
        description: "여름의 맛",
        price: "10,000원",
        img: "../img/attraction/charxpalak.jpg",
        link: "../html/event_about.html",
      },
      {
        title: "Event 2",
        description: "드래곤 축제",
        price: "20,000원",
        img: "../img/attraction/fly.jpg",
        link: "../html/event_about.html",
      },
      {
        title: "Event 3",
        description: "Cars 대결",
        price: "30,000원",
        img: "../img/attraction/cars.jpg",
        link: "../html/event_about.html",
      },
    ];
  } else if (category === "top") {
    events = [
      {
        title: "Top Event 1",
        description: "겨울",
        price: "15,000원",
        img: "../img/attraction/horse.jpg",
        link: "../html/event_about.html",
      },
      {
        title: "Top Event 2",
        description: "SkyDriving",
        price: "25,000원",
        img: "../img/attraction/rooles.jpg",
        link: "../html/event_about.html",
      },
    ];
  } else if (category === "performance") {
    events = [
      {
        title: "Performance Event 1",
        description: "잊을 수 없는 경험",
        price: "18,000원",
        img: "../img/attraction/rooles.jpg",
        link: "../html/event_about.html",
      },
    ];
  } else if (category === "festival") {
    events = [
      {
        title: "Festival Event",
        description: "특별한 축제",
        price: "22,000원",
        img: "../img/ticket/ticket3.jpg",
        link: "../html/event_about.html",
      },
    ];
  }

  events.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");
    eventElement.innerHTML = `
          <img src="${event.img}" alt="${event.title}">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <p><strong>가격: ${event.price}</strong></p>
          <a href="${event.link}">바로 보기</a>
      `;
    eventsSection.appendChild(eventElement);
  });
}

