const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const content = document.querySelector('.content');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  content.classList.toggle('shifted');
});