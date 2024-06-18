window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// JavaScript for the image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

// JavaScript for the hamburger menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Simulate LinkedIn Info
function updateLinkedInInfo() {
    document.getElementById('linkedin-info').innerText = 'LinkedIn Profile: https://www.linkedin.com/groups/9803123/';
}

// Fetch and update Discord Info
async function updateDiscordInfo() {
    const discordServerId = 'ugdkkTWX';
    try {
        const response = await fetch(`https://discord.com/api/v9/invites/${discordServerId}?with_counts=true`);
        const data = await response.json();
        document.getElementById('discord-info').innerText = `Join our Discord: ${data.invite_url}\nMembers: ${data.approximate_member_count}\nOnline: ${data.approximate_presence_count}`;
    } catch (error) {
        console.error('Error fetching Discord data:', error);
    }
}

// Fetch and update GitHub Info
async function updateGitHubInfo() {
    const githubOrg = 'Pero-s-Academy';
    try {
        const response = await fetch(`https://api.github.com/orgs/${githubOrg}`);
        const data = await response.json();
        document.getElementById('github-info').innerHTML = `
            <p>GitHub Organization: <a href="${data.html_url}" target="_blank">${data.login}</a></p>
            <p>Repositories: ${data.public_repos}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
        `;
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
    }
}

// Call the functions to update info
updateLinkedInInfo();
updateDiscordInfo();
updateGitHubInfo();

// Search functionality
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const content = document.querySelectorAll('.content, .community');

    content.forEach(section => {
        section.innerHTML = section.innerHTML.replace(/<mark class="highlight">|<\/mark>/g, ''); // Remove existing highlights
        if (query) {
            const regex = new RegExp(`(${query})`, 'gi');
            section.innerHTML = section.innerHTML.replace(regex, '<mark class="highlight">$1</mark>');
        }
    });
});

// Highlighted search results CSS
const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        background-color: yellow;
    }
`;
document.head.appendChild(style);
