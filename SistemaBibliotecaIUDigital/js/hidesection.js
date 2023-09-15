document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.accordion-section');

    sections.forEach(function(section) {
        section.querySelector('h4').addEventListener('click', function() {
            sections.forEach(function(innerSection) {
                innerSection.classList.remove('active');
            });
            section.classList.add('active');
        });
    });
});
