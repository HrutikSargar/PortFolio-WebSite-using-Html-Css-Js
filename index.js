function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
    
    // document.body.style.backgroundColor="black"
    // color = "white"
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

function a(){
  let a1 = document.getElementsByClassName('cls1')
  a1.document.style.color="pink";
}
function b(){
  // let a1 = document.getElementsByClassName('cls1')
  document.body.style.color="green";
}
