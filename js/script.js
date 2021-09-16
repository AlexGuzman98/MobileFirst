const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Accordeon
const btnItems = document.querySelectorAll('.item .btn-item');

// eslint-disable-next-line no-plusplus
for (let i = 0; i < btnItems.length; i++) {
  btnItems[i].addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.className === 'btn-item active') {
      // eslint-disable-next-line no-use-before-define
      removeClass();
    } else {
      // eslint-disable-next-line no-use-before-define
      removeClass();
      btn.classList.add('active');
    }
  });
}
function removeClass() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < btnItems.length; i++) {
    btnItems[i].classList.remove('active');
  }
}
