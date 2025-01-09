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
        "Tour Rottnest Island",
        "Bike around Rottnest Island\'s picturesque landscapes. Snorkel in crystal-clear bays, relax on pristine beaches, and meet the iconic quokkas.",
        "rottnest_island.jpg"
    ),
    new Activity(
        "Kings Park and Botanic Garden",
        "Explore Kings Park\'s stunning landscapes, walking trails, and native flora. Enjoy breathtaking city views, picnic areas, and cultural landmarks like the State War Memorial.",
        "kings_park.jpeg"
    ),
    new Activity(
        "Explore Fremantle Markets",
        "Discover local produce, unique crafts, and lively street performances at Fremantle Markets. This historic hub is perfect for shopping, dining, and soaking in vibrant culture.",
        "fremantle_markets.jpg"
    ),
    new Activity(
        "Tour Fremantle Prison",
        "Step back in time with guided tours at Fremantle Prison, a UNESCO World Heritage Site showcasing fascinating convict history and eerie underground tunnels.",
        "fremantle_prison.jpg"
    ),
    new Activity(
        "Swim at Cottesloe Beach",
        "Relax at Cottesloe Beach, known for golden sands and clear waters. Perfect for swimming, snorkeling, or enjoying sunset views at seaside cafes.",
        "cottesloe_beach.jpeg"
    ),
    new Activity(
        "Visit Perth Zoo",
        "Get close to native and exotic wildlife at Perth Zoo. Explore lush habitats, family-friendly exhibits, and engaging animal encounters.",
        "perth_zoo.jpg"
    ),
    new Activity(
        "Cruise the Swan River",
        "Take a scenic Swan River cruise from Perth to Fremantle. Enjoy city skyline views, wine tastings, and wildlife spotting along the tranquil waterways.",
        "swan_river.jpg"
    ),
    new Activity(
        "Discover Elizabeth Quay",
        "Stroll through Elizabeth Quay\'s waterfront precinct. Enjoy public art, trendy dining, river views, and family-friendly attractions like the BHP Billiton Water Park.",
        "elizabeth_quay.jpeg"
    ),
    new Activity(
        "Visit the Art Gallery of WA",
        "Admire diverse artworks at the Art Gallery of Western Australia. Featuring local and international pieces, it\'s a cultural gem in Perth\'s city center.",
        "art_gallery_wa.jpeg"
    ),
    new Activity(
        "Explore Yanchep National Park",
        "Spot kangaroos, koalas, and birdlife at Yanchep National Park. Walk through limestone caves and enjoy picnic spots surrounded by natural beauty.",
        "yanchep_national_park.jpg"
    ),
    new Activity(
        "Go Sandboarding in Lancelin",
        "Experience the thrill of sandboarding on Lancelin\'s giant dunes. These white sands provide perfect terrain for adventure seekers near Perth.",
        "lancelin_sandboarding.jpg"
    ),
    new Activity(
        "Walk Through Wave Rock",
        "Marvel at Wave Rock, a natural rock formation resembling a breaking wave. Ideal for photography and exploring nearby Aboriginal cultural sites.",
        "wave_rock.jpeg"
    ),
    new Activity(
        "Visit Hillarys Boat Harbour",
        "Enjoy shopping, dining, and family attractions at Hillarys Boat Harbour. This coastal hub also offers marine tours and aquarium visits.",
        "hillarys_boat_harbour.jpeg"
    ),
    new Activity(
        "Explore Penguin Island",
        "Take a short ferry ride to Penguin Island. Spot little penguins, sea lions, and enjoy nature trails and kayaking opportunities.",
        "penguin_island.jpg"
    ),
    new Activity(
        "Tour the Bell Tower",
        "Climb Perth\'s iconic Bell Tower for panoramic views of the Swan River. Learn about its historic bells and unique architecture.",
        "bell_tower.jpg"
    ),
    new Activity(
        "Visit AQWA",
        "Explore underwater wonders at AQWA, showcasing marine life from Western Australia\'s coastline, with interactive exhibits and a walk-through aquarium tunnel.",
        "aqwa.jpg"
    ),
    new Activity(
        "Relax at Scarborough Beach",
        "Enjoy Scarborough Beach\'s surf-friendly waves, white sands, and vibrant esplanade filled with dining options, playgrounds, and beachfront markets.",
        "scarborough_beach.jpeg"
    ),
    new Activity(
        "Take a Day Trip to the Pinnacles",
        "Discover the unique limestone formations of the Pinnacles Desert. Explore walking trails or take a scenic drive through this otherworldly landscape.",
        "pinnacles.jpg"
    ),
    new Activity(
        "Explore Swan Valley Wineries",
        "Savor award-winning wines and gourmet food in Swan Valley. Visit charming wineries, breweries, and artisan producers just minutes from Perth.",
        "swan_valley_winery.jpeg"
    ),
    new Activity(
        "Discover Perth Mint",
        "Learn about Australia\'s gold history at Perth Mint. Witness a gold pour and view the world\'s largest gold coin.",
        "perth_mint.jpg"
    ),
    new Activity(
        "Go Whale Watching",
        "Spot majestic humpback whales during seasonal cruises from Perth or Fremantle. These guided tours offer unforgettable close-up wildlife encounters.",
        "whale_watching.jpeg"
    ),
    new Activity(
        "Tour Caversham Wildlife Park",
        "Interact with native animals at Caversham Wildlife Park. Hand-feed kangaroos, meet wombats, and watch fascinating wildlife shows.",
        "caversham_wildlife_park.png"
    ),
    new Activity(
        "Visit Mundaring Weir",
        "Explore scenic walking trails around Mundaring Weir. Learn about its history while enjoying stunning views of the dam and surrounding bushland.",
        "mundaring_weir.jpg"
    ),
    new Activity(
        "Bike Along the Swan River",
        "Cycle the scenic Swan River trails. Pass iconic landmarks, lush parks, and picturesque views, suitable for riders of all levels.",
        "swan_river_trail.jpg"
    ),
    new Activity(
        "Relax at Matilda Bay Reserve",
        "Unwind at Matilda Bay Reserve. This riverside park offers picnic spots, kayaking opportunities, and a chance to spot black swans.",
        "matilda_bay_reserve.jpg"
    ),
    new Activity(
        "Explore Perth\'s Street Art",
        "Discover colorful murals and installations in Perth\'s laneways and neighborhoods, showcasing vibrant local and international street art.",
        "perth_street_art.jpeg"
    ),
    new Activity(
        "Visit Lake Monger",
        "Spot black swans and other birdlife at Lake Monger, a serene spot perfect for walking, cycling, or relaxing in nature.",
        "lake_monger.jpeg"
    ),
    new Activity(
        "Take a Brewery Tour in Fremantle",
        "Taste craft beers at Fremantle\'s renowned breweries. Learn about brewing processes while enjoying waterfront views and delicious bites.",
        "fremantle_brewery.jpg"
    ),
    new Activity(
        "Climb Jacob\'s Ladder",
        "Challenge yourself with a workout at Jacob\'s Ladder, a popular staircase offering great city views and a sense of accomplishment.",
        "jacobs_ladder.png"
    ),
    new Activity(
        "Explore Araluen Botanic Park",
        "Stroll through Araluen Botanic Park\'s stunning gardens. Known for its tulips and seasonal blooms, it\'s a picturesque retreat near Perth.",
        "araluen_botanic_park.jpg"
    ),
    new Activity(
        "Visit Perth Cultural Centre",
        "Explore art galleries, museums, and theaters in the Perth Cultural Centre. A lively space for cultural events and creative inspiration.",
        "perth_cultural_centre.jpeg"
    ),
    new Activity(
        "Take a Jetpack Adventure",
        "Experience thrilling jetpack adventures over the water. Fly high and feel the adrenaline with this unique activity available in Perth.",
        "jetpack_adventures.jpg"
    ),
    new Activity(
        "Explore Bold Park",
        "Hike through Bold Park\'s trails for stunning coastal views and native flora. Ideal for birdwatchers and nature enthusiasts.",
        "bold_park.jpeg"
    ),
    new Activity(
        "Visit the Perth Observatory",
        "Discover the wonders of the night sky at Perth Observatory. Join stargazing sessions and learn about celestial phenomena.",
        "perth_observatory.jpg"
    ),
    new Activity(
        "Relax at City Beach",
        "Enjoy a day at City Beach, known for its pristine sands, clear waters, and beachfront dining options with ocean views.",
        "city_beach.jpeg"
    ),
    new Activity(
        "Tour Optus Stadium",
        "Take a behind-the-scenes tour of Optus Stadium. Learn about its design, see locker rooms, and enjoy panoramic city views.",
        "optus_stadium.jpg"
    ),
    new Activity(
        "Visit the Aviation Heritage Museum",
        "Explore aviation history at the museum, featuring historic aircraft, interactive displays, and fascinating stories of Australia\'s flying past.",
        "aviation_heritage_museum.jpg"
    ),
    new Activity(
        "Go Snorkeling at Mettam\'s Pool",
        "Snorkel in the calm, clear waters of Mettam\'s Pool. This reef area is perfect for spotting marine life and relaxing.",
        "mettams_pool.jpg"
    ),
    new Activity(
        "Discover John Forrest National Park",
        "Explore John Forrest National Park\'s walking trails, waterfalls, and picnic spots. Spot kangaroos and enjoy breathtaking natural scenery.",
        "john_forrest_national_park.JPG"
    ),
    new Activity(
        "Paddleboarding @ Swan River",
        "Try paddleboarding or kayaking on the Swan River. It\'s a great spot for beginners with stunning views of the city. <a href=\"https://www.funcats.com.au\">Learn more</a>",
        "swan_river_watersports.png"
    ),
    new Activity(
        "Visit Serpentine Falls",
        "Relax by Serpentine Falls in Serpentine National Park. Enjoy scenic walks and swimming surrounded by native bushland.",
        "serpentine_falls.jpg"
    ),
    new Activity(
        "Fishing @ Coogee Beach",
        "Coogee Beach offers great spots for catching fish and relaxing by the sea.",
        "coogee_beach_jetty.jpeg"
    ),
    new Activity(
        "Visit Whiteman Park",
        "Explore Whiteman Park\'s walking trails, wildlife park, and tram rides. A family-friendly destination with something for everyone.",
        "whiteman_park.jpg"
    ),
    new Activity(
        "Visit Gnomesville",
        "Explore Gnomesville\'s quirky collection of gnomes in the Ferguson Valley. A fun, whimsical stop with endless photo opportunities.",
        "gnomesville.jpeg"
    ),
    new Activity(
        "Explore Lesmurdie Falls",
        "Hike to Lesmurdie Falls for spectacular views and cascading waterfalls. The surrounding trails offer serene natural beauty close to Perth.",
        "lesmurdie_falls.JPG"
    ),
    new Activity(
        "Take a Helicopter Tour",
        "Soar over Perth with a thrilling helicopter tour. See iconic landmarks, the coastline, and the city skyline from an unforgettable perspective.",
        "helicopter_tour.jpg"
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
     * Return index of a random activity
     */
    function randomActivityIndex() {
        return Math.floor(Math.random() * activities.length);
    }

    /**
     * Set background image of main section
     */
    function setBgImage(imgName) {
        section.style.backgroundImage = `url('./media/activities/${imgName}')`;
    }

    /**
     * Shuffle once. Return index of activity chosen. lastActivity is the idnex of lastactivity displayed (choose a different activity)
     */
    function shuffleOnce(lastActivity) {

        // Pick random activity different to current one
        let activityIndex = randomActivityIndex();
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
        setBgImage(activity.imgPath);
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

    // Set a random bg image
    setBgImage(activities[randomActivityIndex()].imgPath);
    
});