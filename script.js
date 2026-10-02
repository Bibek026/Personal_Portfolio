/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {

        alert("Please fill in all fields.");

        return;
    }

    /*
       This is a frontend-only form.

       Later you can connect it to:
       - Formspree
       - EmailJS
       - Netlify Forms
       - Your own backend
    */

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
<<<<<<< HEAD
        "mailto:bibekkrmaity@gmail.com" +
=======
        "mailto:bibekkrmaity.datascience@gmail.com" +
>>>>>>> bcf65bba0ee226000be53ef5cfec81439f2d15df
        "?subject=" + subject +
        "&body=" + body;

});


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const cards = document.querySelectorAll(
    ".skill-card, .project-card, " +
    ".certificate-card, .experience-card, " +
    ".education-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
