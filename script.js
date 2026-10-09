document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const body = [
        "Hello, I have a business enquiry.",
        "",
        "Name: " + name,
        "Phone: " + phone,
        email ? "Email: " + email : "",
        "Enquiry: " + message
      ].filter(Boolean).join("\n");
      const status = document.getElementById("form-status");
      if (status) status.textContent = "Opening WhatsApp with your enquiry. Please press Send in WhatsApp to deliver it.";
      window.open("https://wa.me/916306002178?text=" + encodeURIComponent(body), "_blank", "noopener");
    });
  }
});