class Activity {
    // Activity title
    header;
    // Activity description (about 25 words)
    desc;
    // Filename to background image
    imgPath;
    constructor(header, desc, imgPath) {
        this.header = header;
        this.desc = desc;
        this.imgPath = imgPath;
    }
}

// How many times to shuffle when button clicked
const shuffleCount = 4;

const activities = [
    new Activity(
        "Dining @ Westfield Carousel",
        "Westfield Carousel offers diverse dining options, from casual cafes to rooftop restaurants, featuring cuisines like Italian, Asian and modern Australian in a stylish setting.",
        "dine_westfield_carousel.jpg"
    ),
    new Activity(
        "Day trip @ Rottnest Island",
        "Escape to Rottnest Island for a perfect day trip! Enjoy pristine beaches, scenic bike trails, snorkeling, and meet the iconic quokkas for unforgettable memories.",
        "rottnest_island.jpg"
    )
];

// Only try to access DOM elements once loading complete (avoid null exceptions)
document.addEventListener("DOMContentLoaded", function () {

    const shuffleBtn = document.getElementById("shuffle-btn");
    const header = document.getElementById("activity-header");
    const desc = document.getElementById("activity-desc");
    const section = document.getElementById("main-section");

    // todo implement short wait in between
    function shuffle() {
        // todo refactor so the same element won't be shuffled to twice
        for (let i = 0; i < 4; i++) {
            const activity = activities[Math.floor(Math.random() * activities.length)];
            header.innerHTML = activity.header;
            desc.innerHTML = activity.desc;
            section.style.backgroundImage = `url('./media/activities/${activity.imgPath}')`;
        }
        header.classList.remove("hidden");
    }

    shuffleBtn.addEventListener("click", shuffle);
    
});