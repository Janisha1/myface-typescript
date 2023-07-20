document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

function navMenu_Click(){
  const navBarMenu = document.getElementById("nav-header");
  const main = document.getElementById("mainScreenBlur");
  //const openMenu = document.getElementById("open-nav-menu");
  if (navBarMenu.style.display === 'flex'){
    navBarMenu.style.display = 'none';
 //   openMenu.style.display = 'fixed';
  /*  main.className = ""; */
  } else {
    navBarMenu.style.display = 'flex';
 //   openMenu.style.display = 'none';
  /*  main.className = "addblur"; */
  }
}

function closeNavMenu_Click(){
  const navBarMenu = document.getElementById("nav-header");
 // const openMenu = document.getElementById("open-nav-menu");
  navBarMenu.style.display = 'none';
 // openMenu.style.display = 'fixed';
}