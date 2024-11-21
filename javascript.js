
    // JavaScript para o efeito de hover
    document.querySelectorAll('.circle').forEach(circle => {
        circle.addEventListener('mouseenter', function () {
            this.querySelector('span').textContent = this.dataset.hover;
        });
        circle.addEventListener('mouseleave', function () {
            this.querySelector('span').textContent = this.textContent.trim();
        });
    });

