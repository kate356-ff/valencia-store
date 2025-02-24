document.querySelectorAll('.sort__button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.sort__button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});






