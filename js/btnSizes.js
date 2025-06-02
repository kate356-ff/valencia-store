document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));

      // Добавляем активный класс на выбранную кнопку
      btn.classList.add('active');

      // (опционально) — можешь сохранить выбранный размер, например:
      const selectedSize = btn.getAttribute('data-size');
      console.log('Выбран размер:', selectedSize);
    });
  });
