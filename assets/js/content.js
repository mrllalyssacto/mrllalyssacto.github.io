const cards = [
    // webdev
    {
        category: "webDev",
        title: "Lenovo",
        img: "assets/images/lenovo.png",
        description: "A budget-friendly 14-inch laptop with an Intel Celeron processor for everyday tasks. Affordable for everyone.",
        link: "projects/webDev/project1/index.html",
        buttonText: "Project 1"
    },
    {
        category: "webDev",
        title: "Exploring Netherlands",
        img: "assets/images/netherlands.jpg",
        description: "Explore the Netherlands' charming canals, vibrant cities, and stunning tulip fields for an unforgettable experience.",
        link: "projects/webDev/project2/index.html",
        buttonText: "Project 2"
    },
    {
        category: "webDev",
        title: "Seventeen Gallery",
        img: "assets/images/seventeen.jpg",
        description: "Discover Seventeen's albums, concept photos, and performances in a stunning gallery.",
        link: "projects/webDev/project3/index.html",
        buttonText: "Project 3"
    },
    {
        category: "webDev",
        title: "Rick and Morty API",
        img: "assets/images/rick and morty.jpg",
        description: "The Rick and Morty API offers data on characters, episodes, and locations from the show.",
        link: "projects/webDev/project4/index.html",
        buttonText: "Project 4"
    },
    {
        category: "webDev",
        title: "Discover Space",
        img: "assets/images/space.jpg",
        description: "Explore the vastness of space, filled with stars, planets, and waiting to be discovered.",
        link: "projects/webDev/project5/banner.html",
        buttonText: "Project 5"
    },
    {
        category: "webDev",
        title: "Caratland",
        img: "assets/images/caratland.jpg",
        description: "Showcases exclusive content from Seventeen's latest performances and events.",
        link: "projects/webDev/video/index.html",
        buttonText: "Video"
    },

// appdev
    {
        category: "appDev",
        title: "ApakPH",
        img: "projects/ADET/A02/images/formalModel.png",
        description: "It showcases quality local footwear, highlighting Filipino craftmanship using MVC architecture.",
        link: "projects/ADET/A02/index.php",
        buttonText: "A02"
    },
    {
        category: "appDev",
        title: "Powerpuff Girls",
        img: "assets/images/powerpuff.jpg",
        description: "Dive into the colorful world of Townsville with a dynamic Bento style layout of characters and places!",
        link: "projects/ADET/A03/index.html",
        buttonText: "A03"
    },
    {
        category: "appDev",
        title: "GreenNest POS",
        img: "assets/images/flower.jpg",
        description: "An elegant POS built for seamless flower and garden shop sales — simple, fast, reliable, and beautiful.",
        link: "projects/ADET/A04/index.html",
        buttonText: "A04"
    },
    {
        category: "appDev",
        title: "GreenNest POS FE & BE",
        img: "assets/images/flower.jpg",
        description: "A seamless POS with integrated front-end and back-end — fast, reliable, and made for flower and garden shop sales.",
        link: "projects/ADET/A06/A06_FE/index.html",
        buttonText: "A06"
    },
    {
        category: "appDev",
        title: "17 Embeddable Site",
        img: "assets/images/goingsvt.jpg",
        description: "The Going Seventeen embeddable site showcases behind the scenes pictures from SEVENTEEN’s variety show.",
        link: "projects/ADET/A07/index.html",
        buttonText: "A07"
    }
];

const webDevContainer = document.getElementById("cardContainerWebDev");
const appDevContainer = document.getElementById("cardContainerAppDev");

let i = 0;
while (i < cards.length) {
    const card = cards[i];

    const html = `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="cardProject">
                <img src="${card.img}" class="card-img-top" alt="${card.title}">
                <div class="card-body">
                    <h5 class="cardTitle"><b>${card.title}</b></h5>
                    <p class="cardText">${card.description}</p>
                    <a href="${card.link}" class="btn btn-primary">${card.buttonText}</a>
                </div>
            </div>
        </div>
    `;

    if (card.category === "webDev") {
        webDevContainer.innerHTML += html;
    } else if (card.category === "appDev") {
        appDevContainer.innerHTML += html;
    }

    i++;
}

