const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav--header');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
  });