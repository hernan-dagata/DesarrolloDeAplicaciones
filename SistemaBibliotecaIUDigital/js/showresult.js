var showButton = document.getElementById('showResult');
var resultsDiv = document.getElementById('resultData');

showButton.addEventListener('click', function(e) {
    e.preventDefault();
    resultsDiv.style.display = 'block';
});

