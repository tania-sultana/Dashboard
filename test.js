document.querySelectorAll('.select-list side').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.select-list side.active').classList.remove('active', 'selected');
        item.classList.add('active', 'selected');
    });
});