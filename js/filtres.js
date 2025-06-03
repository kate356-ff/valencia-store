document.querySelector('.apply-filters')?.addEventListener('click', () => {
  document.getElementById('filter-modal').style.display = 'none';
  document.body.classList.remove('modal-open');
});