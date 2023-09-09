var toggleLinks = document.querySelectorAll('.toggleLink');

toggleLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        var targetId = e.currentTarget.getAttribute('data-target');
        var element = document.getElementById(targetId);
        
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});