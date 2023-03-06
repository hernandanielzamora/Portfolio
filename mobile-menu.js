const getMenuBtn = document.getElementById('ham-menu');
const getNavBar = document.querySelector('.nav-sidebar');
const getNavLogg = document.querySelector('.logo');

getMenuBtn.addEventListener('click', () => {
  getMenuBtn.classList.toggle('active');
  getNavBar.classList.toggle('active');
  getNavLogg.classList.toggle('active');
});

document.querySelectorAll('.nave-link').forEach((n) => n.addEventListener('click', () => {
  getMenuBtn.classList.remove('active');
  getNavBar.classList.remove('active');
  getNavLogg.classList.remove('active');
}));
