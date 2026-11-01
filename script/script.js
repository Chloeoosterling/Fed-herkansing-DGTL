// MENU OPENEN EN SLUITEN
const menuButton = document.querySelector("#menu-button");
const mainMenu = document.querySelector("#main-menu");

if (menuButton && mainMenu) {
    menuButton.addEventListener("click", function () {
        const menuIsOpen = mainMenu.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", menuIsOpen);
        menuButton.setAttribute("aria-label", menuIsOpen ? "Close menu" : "Open menu");
    });
}

// DARK MODE AAN- EN UITZETTEN
const themeButton = document.querySelector("#theme-button");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.remove("halloween-mode");
        const darkModeIsOn = document.body.classList.toggle("dark-mode");
        themeButton.setAttribute("aria-pressed", darkModeIsOn);
        themeButton.setAttribute("aria-label", darkModeIsOn ? "Switch to light mode" : "Switch to dark mode");
    });
}

// HALLOWEEN-MODUS
const halloweenButton = document.querySelector("#halloween-button");

if (halloweenButton) {
    halloweenButton.addEventListener("click", function () {
        document.body.classList.remove("dark-mode");
        document.body.classList.toggle("halloween-mode");
    });
}

// PIJLTJES OM HORIZONTAAL DOOR LIJSTEN TE SCROLLEN
function setUpCarousel(listSelector, previousButtonSelector, nextButtonSelector) {
    const list = document.querySelector(listSelector);
    const previousButton = document.querySelector(previousButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);

    if (!list || !previousButton || !nextButton) {
        return;
    }

    previousButton.addEventListener("click", function () {
        list.scrollBy({ left: -list.clientWidth * 0.8, behavior: "smooth" });
    });

    nextButton.addEventListener("click", function () {
        list.scrollBy({ left: list.clientWidth * 0.8, behavior: "smooth" });
    });
}

setUpCarousel(".editions-section .horizontal-list", "#editions-prev", "#editions-next");
setUpCarousel(".news-list", "#news-prev", "#news-next");

// NIEUWSBRIEFFORMULIER: DEMO, VERSTUURT GEEN GEGEVENS
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

if (newsletterForm && formMessage) {
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.textContent = "Thanks! This is a demo form; no details have been sent.";
    });
}

// TABS: ABOUT, NEWS EN FAQ
const amsterdamTabButtons = document.querySelectorAll("[data-amsterdam-tab]");

amsterdamTabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        amsterdamTabButtons.forEach(function (tab) {
            tab.classList.remove("is-active");
            tab.setAttribute("aria-selected", "false");
        });

        button.classList.add("is-active");
        button.setAttribute("aria-selected", "true");

        document.querySelectorAll(".amsterdam-tab-panel").forEach(function (panel) {
            panel.classList.add("is-hidden");
        });

        const selectedPanel = document.querySelector(
            "#amsterdam-tab-" + button.dataset.amsterdamTab
        );

        if (selectedPanel) {
            selectedPanel.classList.remove("is-hidden");
        }
    });
});


// GALERIJ: PIJLTJES
document.querySelectorAll("[data-amsterdam-carousel]").forEach(function (button) {
    button.addEventListener("click", function () {
        const track = document.getElementById(
            button.dataset.amsterdamCarousel
        );

        if (!track) return;

        const firstImage = track.querySelector("img");
        const imageWidth = firstImage
            ? firstImage.getBoundingClientRect().width
            : track.clientWidth * 0.8;

        const direction = Number(button.dataset.direction || 1);

        track.scrollBy({
            left: (imageWidth + 12) * direction,
            behavior: "smooth"
        });
    });
});


// FAQ: CATEGORIEËN
const amsterdamFaqButtons = document.querySelectorAll("[data-faq-category]");

amsterdamFaqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        amsterdamFaqButtons.forEach(function (tab) {
            tab.classList.remove("is-active");
        });

        button.classList.add("is-active");

        document.querySelectorAll("[data-faq-panel]").forEach(function (panel) {
            panel.classList.add("is-hidden");
        });

        const selectedPanel = document.querySelector(
            '[data-faq-panel="' + button.dataset.faqCategory + '"]'
        );

        if (selectedPanel) {
            selectedPanel.classList.remove("is-hidden");
        }
    });
});