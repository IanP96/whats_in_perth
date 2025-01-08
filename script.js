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
        "Discover exceptional dining at Westfield Carousel, Perth's ultimate destination for food lovers. Enjoy diverse cuisines, stylish eateries, and a vibrant atmosphere perfect for every occasion.",
        "dine_westfield_carousel.jpg"
    )
];

// Only try to access DOM elements once loading complete (avoid null exceptions)
document.addEventListener("DOMContentLoaded", function () {

    const shuffleBtn = document.getElementById("shuffle-btn");
    const header = document.getElementById("activity-header");
    const desc = document.getElementById("activity-desc");
    const section = document.getElementById("main-section");

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