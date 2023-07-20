document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

function navMenu_Click(){
  const navBarMenu = document.getElementById("nav-header");
  const main = document.getElementById("mainScreenBlur");
  if (navBarMenu.style.display === 'flex'){
    navBarMenu.style.display = 'none';
  /*  main.className = ""; */
  } else {
    navBarMenu.style.display = 'flex';
  /*  main.className = "addblur"; */
  }
}