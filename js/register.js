document.addEventListener('DOMContentLoaded', function() {
    // Валидация формы регистрации
    const registerForm = document.querySelector('.container__register form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем все необходимые элементы
            const civility = document.getElementById('civility');
            const firstName = document.getElementById('firstname');
            const lastName = document.getElementById('lastname');
            const birthdate = document.getElementById('birthdate');
            const email = document.getElementById('reg-email');
            const password = document.getElementById('password');
            const country = document.getElementById('country');
            const privacyPolicy = document.getElementById('privacy-policy');
            const ageCheck = document.getElementById('age');
            const phoneNumber = document.querySelector('.phone-number');
            
            // Валидация обязательных полей
            if (!civility.value) {
                alert('Please select your civility');
                civility.focus();
                return;
            }
            
            if (!firstName.value) {
                alert('Please enter your first name');
                firstName.focus();
                return;
            }
            
            if (!lastName.value) {
                alert('Please enter your last name');
                lastName.focus();
                return;
            }
            
            if (!validateBirthdate(birthdate.value)) {
                alert('Please enter a valid birthdate in DD/MM/YYYY format');
                birthdate.focus();
                return;
            }
            
            if (!email.value || !isValidEmail(email.value)) {
                alert('Please enter a valid email address');
                email.focus();
                return;
            }
            
            if (!password.value || password.value.length < 8) {
                alert('Password must be at least 8 characters long');
                password.focus();
                return;
            }
            
            if (!country.value) {
                alert('Please select your country');
                country.focus();
                return;
            }
            
            if (!privacyPolicy.checked) {
                alert('You must agree to the privacy policy and terms of use');
                return;
            }
            
            if (!ageCheck.checked) {
                alert('You must be at least 18 years old to register');
                return;
            }
            
            // Если телефон указан - проверяем его
            if (phoneNumber.value && !validatePhoneNumber(phoneNumber.value)) {
                alert('Please enter a valid phone number');
                phoneNumber.focus();
                return;
            }
            
            // Собираем данные формы
            const formData = {
                civility: civility.value,
                firstName: firstName.value,
                lastName: lastName.value,
                birthdate: birthdate.value,
                email: email.value,
                password: password.value,
                country: country.value,
                phone: document.querySelector('.prefix').value + phoneNumber.value,
                newsletter: document.getElementById('newsletter').checked
            };
            
            // Сохраняем данные (в реальном приложении здесь была бы отправка на сервер)
            localStorage.setItem('userData', JSON.stringify(formData));
            
            // Перенаправляем на главную страницу
            window.location.href = 'index.html';
        });
    }
    
    // Функция проверки email
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    // Функция проверки даты рождения
    function validateBirthdate(date) {
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) return false;
        
        const parts = date.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        
        if (year < 1900 || year > new Date().getFullYear()) return false;
        if (month < 1 || month > 12) return false;
        
        const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,  31];
        // Adjust for leap years
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            monthLength[1] = 29;
        }
        
        return day > 0 && day <= monthLength[month - 1];
    }
    
    // Функция проверки телефона
    function validatePhoneNumber(phone) {
        return /^\d{6,15}$/.test(phone);
    }
});