const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

// function PageTransitions() {
//   //button click active-btn class
//   [...document.querySelectorAll(".control")].forEach((button) => {
//     button.addEventListener("click", function () {
//       document.querySelector(".active-btn").classList.remove("active-btn");
//       this.classList.add("active-btn");
//       document.querySelector(".active").classList.remove("active");
//       document.getElementById(button.dataset.id).classList.add("active");
//     });
//   });
// }

(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });

  //section active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //   document.querySelector(".theme-btn").addEventListener("click", () => {
  //     document.body.classList.toggle("light-mode");
  //   });
})();
