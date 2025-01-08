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
// Delay between each shuffle iteration in ms
const shuffleDelay = 200;

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

// Index of current displayed activity, or -1 if no activity displayed yet (button not pressed)
let currentActivity = -1;

// Only try to access DOM elements once loading complete (avoid null exceptions)
document.addEventListener("DOMContentLoaded", function () {

    const shuffleBtn = document.getElementById("shuffle-btn");
    const header = document.getElementById("activity-header");
    const desc = document.getElementById("activity-desc");
    const section = document.getElementById("main-section");

    /**
     * Shuffle once. Return index of activity chosen. lastActivity is the idnex of lastactivity displayed (choose a different activity)
     */
    function shuffleOnce(lastActivity) {

        // Pick random activity different to current one
        let activityIndex = Math.floor(Math.random() * activities.length);
        if (activityIndex == lastActivity) {
            if (activityIndex == 0) {
                activityIndex++;
            } else {
                activityIndex--;
            }
        }
        const activity = activities[activityIndex];

        // Style HTML elements
        header.innerHTML = activity.header;
        desc.innerHTML = activity.desc;
        section.style.backgroundImage = `url('./media/activities/${activity.imgPath}')`;
        header.classList.remove("hidden");

        return activityIndex;
    }

    /**
     * Shuffle a given number of times
     */
    function shuffleMultipleTimes(iterations, lastActivity) {
        shuffleBtn.disabled = true;
        const activityChosen = shuffleOnce(lastActivity);
        if (iterations > 0) {
            setTimeout(() => shuffleMultipleTimes(iterations - 1, activityChosen), shuffleDelay);
        } else {
            // Last shuffle complete
            currentActivity = activityChosen;
            shuffleBtn.disabled = false;
        }
    }

    function shuffleBtnClicked() {
        shuffleMultipleTimes(shuffleCount, currentActivity);
    }

    shuffleBtn.addEventListener("click", shuffleBtnClicked);
    
});