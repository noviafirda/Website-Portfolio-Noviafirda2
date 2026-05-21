// NAVBAR DAN HERO SECTION
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// MY SKILLS
const progressBars = document.querySelectorAll(".progress-fill");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const bar = entry.target;
            bar.style.width = bar.getAttribute("data-width");
        }
    });
}, {
    threshold: 0.5
});

progressBars.forEach(bar => {
    observer.observe(bar);
});

// PROJECT
 const slider = document.getElementById("slider");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentIndex = 0;
    const cardWidth = 320;
    const totalOriginalCards = 5;

    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)` ;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex++;
      updateSlider();

      if (currentIndex >= totalOriginalCards) {
        setTimeout(() => {
          slider.style.transition = "none";
          currentIndex = 0;
          updateSlider();

          setTimeout(() => {
            slider.style.transition = "0.5s ease";
          }, 50);
        }, 500);
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex === 0) {
        slider.style.transition = "none";
        currentIndex = totalOriginalCards;
        updateSlider();

        setTimeout(() => {
          slider.style.transition = "0.5s ease";
          currentIndex--;
          updateSlider();
        }, 50);
      } else {
        currentIndex--;
        updateSlider();
      }
    });

    function goToPage(page) {
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = page;
      }, 400);
    }

    window.onload = () => {
      document.body.style.opacity = "1";
    };

// CONTACT
const form = document.getElementById("contactForm");
const inputs = document.querySelectorAll(".required");
const popup = document.getElementById("successPopup");
const btn = document.querySelector(".contact-btn");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let valid = true;

  inputs.forEach(input => {
    if(input.value.trim() === ""){
      input.classList.add("error");
      valid = false;
    } else {
      input.classList.remove("error");
    }
  });

  if(valid){
    btn.innerHTML = "Booked Successfully ✓";
    popup.style.display = "block";

    setTimeout(() => {
      btn.innerHTML = "Book An Appointment";
      popup.style.display = "none";
      form.reset();
    }, 2500);
  }
});


/* =========================
   CARD CLICK PAGE
========================= */

function goToPage(link) {
  window.location.href = link;
}


/* =========================
   SMOOTH SCROLL NAVBAR
========================= */

document.querySelectorAll(".nav-item-box").forEach(link => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    if (target.startsWith("#")) {
      e.preventDefault();

      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// FOOTER
// newsletter
const newsletterInput = document.getElementById("newsletterInput");
const newsletterBtn = document.getElementById("newsletterBtn");
const newsletterSuccess = document.getElementById("newsletterSuccess");

newsletterBtn.addEventListener("click", function () {
  
  if (newsletterInput.value.trim() === "") {
    newsletterInput.classList.add("error");

    setTimeout(() => {
      newsletterInput.classList.remove("error");
    }, 1500);

    newsletterSuccess.style.display = "none";
    return;
  }

  newsletterBtn.innerText = "Sending...";

  setTimeout(() => {
    newsletterBtn.innerText = "Sent ✓";
    newsletterSuccess.style.display = "block";

    newsletterInput.value = "";

    setTimeout(() => {
      newsletterBtn.innerText = "Send";
      newsletterSuccess.style.display = "none";
    }, 2500);

  }, 800);
});

// tombol scroll top
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.visibility = "visible";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.visibility = "hidden";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// animasi social card footer
const footerCards = document.querySelectorAll(".social-card");

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

footerCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = `0.8s ease ${index * 0.2}s`;

  footerObserver.observe(card);
});