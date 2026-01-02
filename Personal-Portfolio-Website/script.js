// ===== POPUP FUNCTIONALITY =====
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');
const recommendationForm = document.getElementById('recommendationForm');
const recommendationsList = document.getElementById('recommendationsList');

// Close popup when X is clicked
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Close popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// ===== HANDLE FORM SUBMISSION =====
recommendationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const recommenderName = document.getElementById('recommenderName').value;
    const recommenderTitle = document.getElementById('recommenderTitle').value;
    const recommendationText = document.getElementById('recommendationText').value;

    // Create new recommendation card
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation-card';
    newRecommendation.innerHTML = `
        <div class="recommendation-header">
            <img src="https://via.placeholder.com/50" alt="Profile">
            <div class="recommendation-user-info">
                <h4>${recommenderName}</h4>
                <p>${recommenderTitle}</p>
            </div>
        </div>
        <p class="recommendation-text">
            "${recommendationText}"
        </p>
    `;

    // Add new recommendation to the list
    recommendationsList.appendChild(newRecommendation);

    // Show popup
    showPopup();

    // Reset form
    recommendationForm.reset();
});

// ===== SHOW POPUP FUNCTION =====
function showPopup() {
    popup.style.display = 'block';
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HOME ICON SCROLL TO TOP =====
document.querySelector('.home-icon a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== NAVIGATION HIGHLIGHT ON SCROLL =====
window.addEventListener('scroll', function() {
    let currentSection = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '#333';
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.style.color = '#667eea';
            link.style.fontWeight = '700';
        }
    });
});

// ===== ANIMATION ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .recommendation-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});