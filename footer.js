"use strict";

// Get the current year of the website
const currentYear = new Date().getFullYear();

// Find all elements with class 'copyright-year' and update them
document.querySelectorAll(".copyright-year").forEach((el) => {
  el.textContent = currentYear;
});
