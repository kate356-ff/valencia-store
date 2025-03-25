document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;
            const accordionContent = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Закрываем все открытые аккордеоны
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content !== accordionContent && content.style.display === 'block') {
                    content.style.display = 'none';
                    content.previousElementSibling.querySelector('i').className = 'bi bi-plus';
                }
            });
            
            // Переключаем текущий аккордеон
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
                icon.className = 'bi bi-plus';
            } else {
                accordionContent.style.display = 'block';
                icon.className = 'bi bi-dash';
            }
        });
    });
});