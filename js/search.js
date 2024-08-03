function search() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    if (query === '') {
        alert('Please enter a search term.');
        return;
    }

    // Simulate search process
    alert('Searching for: ' + query);

    // Add functionality to search specific content on the page
    const elements = document.querySelectorAll('.content, .faculty-members, .section-content');
    elements.forEach(element => {
        const content = element.textContent.toLowerCase();
        if (content.includes(query)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

document.getElementById('search-button').addEventListener('click', search);
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        search();
    }
});