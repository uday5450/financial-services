// Function to load HTML components
function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load components when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    loadComponent('header-container', '/components/header.html');
    
    // Load footer
    loadComponent('footer-container', '/components/footer.html');
});