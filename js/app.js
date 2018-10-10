// https://github.com/dianadi09/pureJSLightbox

(() => {
  console.log("Welcome to our Midterm.");

  //! VARIABLES
  const productTitle = document.querySelector('#title');
  const productTagline = document.querySelector('.hero-tagline');

  // toogle for nav hanburger menu
  let toogle = document.querySelector(".navigation__checkbox");
  toogle.checked = false;

  //! FUNCTIONS
  // add content to paragraphs with Javascript
  function setCourseInfo(data) {
    productTitle.textContent = data.product_name;
    productTagline.textContent = data.product_tagline;

  }

  function getData() {
    fetch('../../Blue_E_Angelozzi_C_Atkinson_J_Boyden_D_J_Robertson_J_Hackathon/midterm/product/read.php')
      .then(res => res.json())
      .then(data => {
        setCourseInfo(data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }


  //! EVENTS

  // events on load
  window.addEventListener("load", () => {
    // toogle navigation from hamburger to normal when matching media query
    if (window.matchMedia("(min-width: 700px)").matches) {
      toogle.checked = true;
    }
  });

  getData();

})();
