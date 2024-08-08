function increaseFontSize() {
  document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) + 2) + 'px';
}

function decreaseFontSize() {
  document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) - 2) + 'px';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 200) {
    backToTopButton.classList.add('show-back-to-top');
  } else {
    backToTopButton.classList.remove('show-back-to-top');
  }
});
