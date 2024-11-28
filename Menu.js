document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        if (menu.style.right === '-250px') {
            menu.style.right = '0';
        } else {
            menu.style.right = '-250px';
        }
        
    });
});