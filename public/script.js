
const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});


const login = document.getElementById('login_btn')
const logout = document.getElementById('logout_btn')

login.addEventListener('click',()=>{
  login.classList.add("toggle_name")
  logout.classList.remove("toggle_name")
})




