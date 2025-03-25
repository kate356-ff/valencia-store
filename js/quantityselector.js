document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.minus-btn');
    const plusBtn = document.querySelector('.plus-btn');
    const quantityInput = document.querySelector('.quantity-input');
    
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    
    // Дополнительная проверка при ручном вводе
    quantityInput.addEventListener('change', function() {
        if (parseInt(this.value) < 1 || isNaN(parseInt(this.value))) {
            this.value = 1;
        }
    });
});