// Initialize Lucide Icons
lucide.createIcons();

// Singlish Reviews Data
const reviews = [
    {
        name: "Kasun Silva",
        role: "Pro Trader",
        initials: "KS",
        text: "Meka patta bot eka machan, salli hewwa godak! Setup karanna mara lesi. 🚀",
        stars: 5
    },
    {
        name: "Dasun Perera",
        role: "Crypto Enthusiast",
        initials: "DP",
        text: "Trading karanna meka maru, loss wenne na godak welawata. Risk management eka supiri.",
        stars: 5
    },
    {
        name: "Amila Fernando",
        role: "Beginner",
        initials: "AF",
        text: "Niyamai! Dawasata 50$ k wath hoyaganna puluwan kisi awulak nathuwa. Highly recommended!",
        stars: 4
    },
    {
        name: "Chaminda J",
        role: "Day Trader",
        initials: "CJ",
        text: "Supiri wedak, customer support ekath hodai. Prashnayak unoth ikmanata wisadanawa. 🔥",
        stars: 5
    }
];

// Populate Reviews
const reviewGrid = document.querySelector('.review-grid');

reviews.forEach(review => {
    const starHTML = Array(review.stars).fill('<i data-lucide="star" class="fill-current"></i>').join('');
    
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    
    reviewCard.innerHTML = `
        <div class="stars">
            ${starHTML}
        </div>
        <p class="review-text">"${review.text}"</p>
        <div class="review-author">
            <div class="author-avatar">${review.initials}</div>
            <div class="author-info">
                <h4>${review.name}</h4>
                <span>${review.role}</span>
            </div>
        </div>
    `;
    
    reviewGrid.appendChild(reviewCard);
});

// Re-initialize icons for dynamically added content
lucide.createIcons();

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
