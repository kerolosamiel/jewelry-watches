const questionElements = document.querySelectorAll(".faqs-bx .faq");
const burgerIconElement = document.querySelector(".burger-icon");
const navigationBar = document.querySelector(".nav-bar");

function activateElement(element) {
  element.classList.add("active");
}

function deactivateElement(element) {
  element.classList.remove("active");
}

function handleQuestions(event) {
  deactivateElement(document.querySelector(".faqs-bx .faq.active"));
  activateElement(event);
}

questionElements.forEach((faqEle) => {
  faqEle.addEventListener("click", () => {
    handleQuestions(faqEle);
  });
});

function toggleActive(element) {
  element.classList.toggle("active");
}

function toggleMenu(element) {
  toggleActive(element);
  toggleActive(navigationBar);
}

burgerIconElement.addEventListener("click", () => {
  toggleMenu(burgerIconElement);
});
