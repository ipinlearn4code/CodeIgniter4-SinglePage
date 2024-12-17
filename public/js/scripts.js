/*!
 * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */

// Debugging: Confirm the script is loaded
console.log('scripts.js loaded successfully');

// Ensure the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded.');

    // Toggle the side navigation
    const sidebarToggle = document.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', (event) => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem(
                'sb|sidebar-toggle',
                document.body.classList.contains('sb-sidenav-toggled')
            );
        });
    }

    // Attach click events to nav links
    attachLinkListeners();
});

// Function to dynamically load content
function loadPage(page) {
    console.log('loadPage triggered for:', page);

    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error("Error: 'content' div not found in the DOM.");
        return;
    }

    // Show loading indicator
    contentDiv.innerHTML = '<p>Loading...</p>';

    // Fetch the content from the server
    fetch(`home/?page=${page}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((html) => {
            console.log('Server response fetched successfully.');

            // Parse the HTML response
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Extract the #content div from the response
            const newContent = doc.querySelector('#content');
            if (newContent) {
                contentDiv.innerHTML = newContent.innerHTML; // Replace with new content
            } else {
                contentDiv.innerHTML = '<p>Content not found.</p>';
                console.error("Error: 'content' div not found in the server response.");
            }
        })
        .catch((error) => {
            console.error('Error fetching content:', error);
            contentDiv.innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
}

// Attach listeners to nav links for dynamic loading
function attachLinkListeners() {
    const links = document.querySelectorAll('.nav-link[data-page]');
    if (links.length === 0) {
        console.warn("No links with 'data-page' attribute found.");
        return;
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default navigation
            const page = link.getAttribute('data-page');
            if (page) {
                loadPage(page);
            } else {
                console.error("Error: 'data-page' attribute is missing on the link.");
            }
        });
    });
}
