
// Скрипт для работы модального окна
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('filter-modal');
    const btnOpen = document.getElementById('open-filter-modal');
    const btnClose = document.querySelector('.close-modal');
    
    // Открытие модального окна
    btnOpen.addEventListener('click', function() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
    });
    
    // Закрытие модального окна
    btnClose.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Возвращаем прокрутку страницы
    });
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Закрытие при нажатии Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});
