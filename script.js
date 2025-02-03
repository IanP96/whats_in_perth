class Activity {

    // Activity title
    header;
    // Activity description (about 25 words)
    desc;
    // Filename to background image
    imgPath;
    // Link to learn more about this activity
    learnMoreLink;
    // Other links (optional)
    otherLinks;

    constructor(header, desc, imgPath, learnMoreLink = undefined, otherLinks = []) {
        this.header = header;
        this.desc = desc;
        this.imgPath = imgPath;
        this.learnMoreLink = learnMoreLink;
        // this.otherLinks = otherLinks;
        this.otherLinks = [];
        for (const [name, url] of otherLinks) {
            this.otherLinks.push({name, url});
        }
    }

}

function createLinkNode(name, url, newTab = true) {
    const linkNode = document.createElement("a");
    linkNode.innerHTML = name;
    linkNode.href = url;
    if (newTab) {
        linkNode.target = "_blank";
    }
    return linkNode;
}

// How many times to shuffle when button clicked
const shuffleCount = 4;
// Delay between each shuffle iteration in ms
const shuffleDelay = 200;

const activities = [
    new Activity(
        "Dining @ Westfield Carousel",
        "Westfield Carousel offers diverse dining options, from casual cafes to rooftop restaurants, featuring cuisines like Italian, Asian and modern Australian in a stylish setting.",
        "dine_westfield_carousel.jpg",
        "https://www.westfield.com.au/carousel/dining"
    ),
    new Activity(
        "Tour Rottnest Island",
        "Bike around Rottnest Island\'s picturesque landscapes. Snorkel in crystal-clear bays, relax on pristine beaches, and meet the iconic quokkas.",
        "rottnest_island.jpg",
        "https://www.rottnestisland.com"
    ),
    new Activity(
        "Kings Park and Botanic Garden",
        "Explore Kings Park\'s stunning landscapes, walking trails, and native flora. Enjoy breathtaking city views, picnic areas, and cultural landmarks like the State War Memorial.",
        "kings_park.jpeg",
        "https://www.bgpa.wa.gov.au/kings-park"
    ),
    new Activity(
        "Explore Fremantle Markets",
        "Discover local produce, unique crafts, and lively street performances at Fremantle Markets. This historic hub is perfect for shopping, dining, and soaking in vibrant culture.",
        "fremantle_markets.jpg",
        "https://www.fremantlemarkets.com.au"
    ),
    new Activity(
        "Tour Fremantle Prison",
        "Step back in time with guided tours at Fremantle Prison, a UNESCO World Heritage Site showcasing fascinating convict history and eerie underground tunnels.",
        "fremantle_prison.jpg",
        "https://fremantleprison.com.au"
    ),
    new Activity(
        "Swim at Cottesloe Beach",
        "Relax at Cottesloe Beach, known for golden sands and clear waters. Perfect for swimming, snorkeling, or enjoying sunset views at seaside cafes.",
        "cottesloe_beach.jpeg",
        "https://www.westernaustralia.com/au/attraction/cottesloe-beach/56b2678fd5f1565045daabd8"
    ),
    new Activity(
        "Visit Perth Zoo",
        "Get close to native and exotic wildlife at Perth Zoo. Explore lush habitats, family-friendly exhibits, and engaging animal encounters.",
        "perth_zoo.jpg",
        "https://perthzoo.wa.gov.au/article/otter-ly-in-love"
    ),
    new Activity(
        "Cruise the Swan River",
        "Take a scenic Swan River cruise from Perth to Fremantle. Enjoy city skyline views, wine tastings, and wildlife spotting along the tranquil waterways.",
        "swan_river.jpg",
        undefined,
        [
            ["Captain Cook Cruises", "https://www.captaincookcruises.com.au/cruises/swan-river-scenic-cruise-from-perth/"],
            ["Swan Valley Tours", "https://www.svtours.com.au/tours/public-tours/taste-of-the-valley-cruise/"],
            ["Perth Swan River Cruises", "https://perthswanrivercruises.com.au"],
            ["SeaLink", "https://www.sealink.com.au/rottnest-island/experiences/swan-river-scenic-cruise-from-fremantle/"],
            ["Wild West Charters", "https://wildwestcharters.com.au"],
            ["Little Ferry Co", "https://littleferryco.com.au"]
        ]
    ),
    new Activity(
        "Discover Elizabeth Quay",
        "Stroll through Elizabeth Quay\'s waterfront precinct. Enjoy public art, trendy dining, river views, and family-friendly attractions like the BHP Billiton Water Park.",
        "elizabeth_quay.jpeg",
        "https://developmentwa.com.au/projects/redevelopment/elizabeth-quay/see-do"
    ),
    new Activity(
        "Visit the Art Gallery of WA",
        "Admire diverse artworks at the Art Gallery of Western Australia. Featuring local and international pieces, it\'s a cultural gem in Perth\'s city center.",
        "art_gallery_wa.jpeg",
        "https://artgallery.wa.gov.au"
    ),
    new Activity(
        "Explore Yanchep National Park",
        "Spot kangaroos, koalas, and birdlife at Yanchep National Park. Walk through limestone caves and enjoy picnic spots surrounded by natural beauty.",
        "yanchep_national_park.jpg",
        "https://exploreparks.dbca.wa.gov.au/park/yanchep-national-park"
    ),
    new Activity(
        "Go Sandboarding in Lancelin",
        "Experience the thrill of sandboarding on Lancelin\'s giant dunes. These white sands provide perfect terrain for adventure seekers near Perth.",
        "lancelin_sandboarding.jpg",
        "https://www.lancelin.com.au/sandboards/"
    ),
    new Activity(
        "Walk Through Wave Rock",
        "Marvel at Wave Rock, a natural rock formation resembling a breaking wave. Ideal for photography and exploring nearby Aboriginal cultural sites.",
        "wave_rock.jpeg",
        "https://www.westernaustralia.com/au/attraction/wave-rock/56b266fb7b935fbe730e63bc"
    ),
    new Activity(
        "Visit Hillarys Boat Harbour",
        "Enjoy shopping, dining, and family attractions at Hillarys Boat Harbour. This coastal hub also offers marine tours and aquarium visits.",
        "hillarys_boat_harbour.jpeg",
        "https://www.westernaustralia.com/au/attraction/hillarys-boat-harbour/56b267c92880253d74c4ff72"
    ),
    new Activity(
        "Explore Penguin Island",
        "Take a short ferry ride to Penguin Island. Spot little penguins, sea lions, and enjoy nature trails and kayaking opportunities.",
        "penguin_island.jpg",
        "https://www.penguinisland.com.au/#welcome-1"
    ),
    new Activity(
        "Tour the Bell Tower",
        "Climb Perth\'s iconic Bell Tower for panoramic views of the Swan River. Learn about its historic bells and unique architecture.",
        "bell_tower.jpg",
        "https://www.thebelltower.com.au/book-an-experience/"
    ),
    new Activity(
        "Visit AQWA",
        "Explore underwater wonders at AQWA, showcasing marine life from Western Australia\'s coastline, with interactive exhibits and a walk-through aquarium tunnel.",
        "aqwa.jpg",
        "https://www.aqwa.com.au"
    ),
    new Activity(
        "Relax at Scarborough Beach",
        "Enjoy Scarborough Beach\'s surf-friendly waves, white sands, and vibrant esplanade filled with dining options, playgrounds, and beachfront markets.",
        "scarborough_beach.jpeg",
        "https://www.westernaustralia.com/au/attraction/scarborough-beach/56b266a82880253d74c4ec7d"
    ),
    new Activity(
        "Take a Day Trip to the Pinnacles",
        "Discover the unique limestone formations of the Pinnacles Desert. Explore walking trails or take a scenic drive through this otherworldly landscape.",
        "pinnacles.jpg",
        "https://www.westernaustralia.com/au/attraction/pinnacles-desert-lookout-and-drive/56b266a82cbcbe7073ae055c"
    ),
    new Activity(
        "Explore Swan Valley Wineries",
        "Savor award-winning wines and gourmet food in Swan Valley. Visit charming wineries, breweries, and artisan producers just minutes from Perth.",
        "swan_valley_winery.jpeg",
        "https://www.swanvalley.com.au/eat-drink/wineries"
    ),
    new Activity(
        "Discover Perth Mint",
        "Learn about Australia\'s gold history at Perth Mint. Witness a gold pour and view the world\'s largest gold coin.",
        "perth_mint.jpg",
        "https://visitperth.com/see-and-do/educational-attractions/Venues/the-perth-mint"
    ),
    new Activity(
        "Go Whale Watching",
        "Spot majestic humpback whales during seasonal cruises from Perth or Fremantle. These guided tours offer unforgettable close-up wildlife encounters.",
        "whale_watching.jpeg",
        "https://www.destinationperth.com.au/things-to-do/nature-and-wildlife/whale-watching/"
    ),
    new Activity(
        "Tour Caversham Wildlife Park",
        "Interact with native animals at Caversham Wildlife Park. Hand-feed kangaroos, meet wombats, and watch fascinating wildlife shows.",
        "caversham_wildlife_park.png",
        "https://www.cavershamwildlife.com.au"
    ),
    new Activity(
        "Visit Mundaring Weir",
        "Explore scenic walking trails around Mundaring Weir. Learn about its history while enjoying stunning views of the dam and surrounding bushland.",
        "mundaring_weir.jpg",
        "https://www.westernaustralia.com/au/attraction/mundaring-weir/56b2674baeeeaaf773cfa27f"
    ),
    new Activity(
        "Bike Along the Swan River",
        "Cycle the scenic Swan River trails. Pass iconic landmarks, lush parks, and picturesque views, suitable for riders of all levels.",
        "swan_river_trail.jpg",
        "https://www.destinationperth.com.au/explore-perth/perth-city/trails/cycle-trails/"
    ),
    new Activity(
        "Relax at Matilda Bay Reserve",
        "Unwind at Matilda Bay Reserve. This riverside park offers picnic spots, kayaking opportunities, and a chance to spot black swans.",
        "matilda_bay_reserve.jpg",
        "https://exploreparks.dbca.wa.gov.au/park/matilda-bay-reserve"
    ),
    new Activity(
        "Explore Perth\'s Street Art",
        "Discover colorful murals and installations in Perth\'s laneways and neighborhoods, showcasing vibrant local and international street art.",
        "perth_street_art.jpeg",
        "https://visitperth.com/see-and-do/mural-and-street-art"
    ),
    new Activity(
        "Visit Lake Monger",
        "Spot black swans and other birdlife at Lake Monger, a serene spot perfect for walking, cycling, or relaxing in nature.",
        "lake_monger.jpeg",
        "https://www.westernaustralia.com/au/attraction/lake-monger/56b266a07b935fbe730e5ada"
    ),
    new Activity(
        "Take a Brewery Tour in Fremantle",
        "Taste craft beers at Fremantle\'s renowned breweries. Learn about brewing processes while enjoying waterfront views and delicious bites.",
        "fremantle_brewery.jpg",
        "https://www.visitfremantle.com.au/explore/eat-and-drink/breweries-and-distilleries"
    ),
    new Activity(
        "Climb Jacob\'s Ladder",
        "Challenge yourself with a workout at Jacob\'s Ladder, a popular staircase offering great city views and a sense of accomplishment.",
        "jacobs_ladder.png",
        "https://www.tripadvisor.com.au/Attraction_Review-g255103-d10467168-Reviews-Jacob_s_Ladder-Perth_Greater_Perth_Western_Australia.html"
    ),
    new Activity(
        "Explore Araluen Botanic Park",
        "Stroll through Araluen Botanic Park\'s stunning gardens. Known for its tulips and seasonal blooms, it\'s a picturesque retreat near Perth.",
        "araluen_botanic_park.jpg",
        "https://araluenbotanicpark.com.au"
    ),
    new Activity(
        "Visit Perth Cultural Centre",
        "Explore art galleries, museums, and theaters in the Perth Cultural Centre. A lively space for cultural events and creative inspiration.",
        "perth_cultural_centre.jpeg",
        "https://www.perthculturalcentre.com.au"
    ),
    new Activity(
        "Take a Jetpack Adventure",
        "Experience thrilling jetpack adventures over the water. Fly high and feel the adrenaline with this unique activity available in Perth.",
        "jetpack_adventures.jpg",
        "https://www.jetpackadventures.com.au/perth/"
    ),
    new Activity(
        "Explore Bold Park",
        "Hike through Bold Park\'s trails for stunning coastal views and native flora. Ideal for birdwatchers and nature enthusiasts.",
        "bold_park.jpeg",
        "https://www.bgpa.wa.gov.au/bold-park"
    ),
    new Activity(
        "Visit the Perth Observatory",
        "Discover the wonders of the night sky at Perth Observatory. Join stargazing sessions and learn about celestial phenomena.",
        "perth_observatory.jpg",
        "https://perthobservatory.com.au"
    ),
    new Activity(
        "Relax at City Beach",
        "Enjoy a day at City Beach, known for its pristine sands, clear waters, and beachfront dining options with ocean views.",
        "city_beach.jpeg",
        "https://www.westernaustralia.com/au/attraction/city-beach/56b2678e2880253d74c4fb2b"
    ),
    new Activity(
        "Tour Optus Stadium",
        "Take a behind-the-scenes tour of Optus Stadium. Learn about its design, see locker rooms, and enjoy panoramic city views.",
        "optus_stadium.jpg",
        "https://theozone.com.au/experiences/optus-stadium-tours/"
    ),
    new Activity(
        "Visit the Aviation Heritage Museum",
        "Explore aviation history at the museum, featuring historic aircraft, interactive displays, and fascinating stories of Australia\'s flying past.",
        "aviation_heritage_museum.jpg",
        "https://aviationmuseumwa.org.au"
    ),
    new Activity(
        "Go Snorkeling at Mettam\'s Pool",
        "Snorkel in the calm, clear waters of Mettam\'s Pool. This reef area is perfect for spotting marine life and relaxing.",
        "mettams_pool.jpg",
        "https://exploreparks.dbca.wa.gov.au/site/mettams-pool"
    ),
    new Activity(
        "Discover John Forrest National Park",
        "Explore John Forrest National Park\'s walking trails, waterfalls, and picnic spots. Spot kangaroos and enjoy breathtaking natural scenery.",
        "john_forrest_national_park.JPG",
        "https://exploreparks.dbca.wa.gov.au/park/john-forrest-national-park"
    ),
    new Activity(
        "Paddleboarding @ Swan River",
        "Try paddleboarding or kayaking on the Swan River. It\'s a great spot for beginners with stunning views of the city.",
        "swan_river_watersports.png",
        undefined,
        [
            ["Funcats", "https://www.funcats.com.au/stand-up-paddle-hire"],
            ["SUP Central", "https://supcentralwa.com.au/stand-up-paddle-board-hire/"],
            ["Swans on the Swan", "https://swansontheswan.com.au"]
        ]
    ),
    new Activity(
        "Visit Serpentine Falls",
        "Relax by Serpentine Falls in Serpentine National Park. Enjoy scenic walks and swimming surrounded by native bushland.",
        "serpentine_falls.jpg",
        "https://exploreparks.dbca.wa.gov.au/park/serpentine-national-park"
    ),
    new Activity(
        "Fishing @ Coogee Beach",
        "Coogee Beach offers great spots for catching fish and relaxing by the sea.",
        "coogee_beach_jetty.jpeg",
        "https://www.westernaustralia.com/au/attraction/coogee-beach/620317d4199e22067f994cfa"
    ),
    new Activity(
        "Visit Whiteman Park",
        "Explore Whiteman Park\'s walking trails, wildlife park, and tram rides. A family-friendly destination with something for everyone.",
        "whiteman_park.jpg",
        "https://www.whitemanpark.com.au"
    ),
    new Activity(
        "Visit Gnomesville",
        "Explore Gnomesville\'s quirky collection of gnomes in the Ferguson Valley. A fun, whimsical stop with endless photo opportunities.",
        "gnomesville.jpeg",
        "https://www.gnomesville.com.au"
    ),
    new Activity(
        "Explore Lesmurdie Falls",
        "Hike to Lesmurdie Falls for spectacular views and cascading waterfalls. The surrounding trails offer serene natural beauty close to Perth.",
        "lesmurdie_falls.JPG",
        "https://www.westernaustralia.com/au/attraction/lesmurdie-falls/56b268fbaeeeaaf773cfb9c1"
    ),
    new Activity(
        "Take a Helicopter Tour",
        "Soar over Perth with a thrilling helicopter tour. See iconic landmarks, the coastline, and the city skyline from an unforgettable perspective.",
        "helicopter_tour.jpg",
        undefined,
        [
            ["Corsaire Aviation", "https://www.corsaireaviation.com.au/scenic-flights/"],
            ["Red Balloon", "https://www.redballoon.com.au/helicopter-flights/perth/"],
            ["Rotorvation", "https://www.rotorvation.com.au"]
        ]
    )
];

// Index of current displayed activity, or -1 if no activity displayed yet (button not pressed)
let currentActivity = -1;

/**
 * Return index of a random activity
 */
function randomActivityIndex() {
    return Math.floor(Math.random() * activities.length);
}

/**
 * Get formatted image url path from image filename
 */
function imgUrl(imgName) {
    return `url('./media/activities/${imgName}')`;
}

// Load all images by adding every image as an invisible div element
// inspired by https://www.reddit.com/r/learnjavascript/comments/94uzf2/comment/e3qqjva/?utm_source=share&utm_medium=web3xutm_name=web3xcss&utm_term=1&utm_content=share_button
const section = document.getElementById("main-section");
activities.forEach(activity => {
    const div = document.createElement("div");
    div.classList.add("invisible");
    div.style.backgroundImage = imgUrl(activity.imgPath)
    section.appendChild(div);
});

// Only try to access DOM elements once loading complete (avoid null exceptions)
document.addEventListener("DOMContentLoaded", function () {

    const shuffleBtn = document.getElementById("shuffle-btn");
    const header = document.getElementById("activity-header");
    const desc = document.getElementById("activity-desc");

    /**
     * Set background image of main section
     */
    function setBgImage(imgName) {
        section.style.backgroundImage = imgUrl(imgName);
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
        if (activity.learnMoreLink !== undefined) {
            desc.innerHTML += "<br>";
            desc.appendChild(createLinkNode("Learn more", activity.learnMoreLink));
        }
        if (activity.otherLinks.length > 0) {
            desc.innerHTML += "<br>";
            for (let i = 0; i < activity.otherLinks.length; i++) {
                if (i !== 0) {
                    desc.innerHTML += " | ";
                }
                const link = activity.otherLinks[i];
                desc.appendChild(createLinkNode(link.name, link.url));
            }
        }
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