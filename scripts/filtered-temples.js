const title = document.querySelector("p");
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const main = document.querySelector("main");

hamButton.addEventListener("click", () => {
    title.classList.toggle("open");
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Belo Horizonte Brazil",
        location: "Belo Horizonte, Brazil",
        dedicated: "2026, August, 16",
        area: 28686,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-71943.jpg"
    },
    {
        templeName: "Salta Argentina",
        location: "Salta, Argentina",
        dedicated: "2024, June, 16",
        area: 27000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241.jpg"
    },
    {
        templeName: "Concepción Chile",
        location: "Concepción, Chile",
        dedicated: "2018, October, 28",
        area: 23095,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273.jpg"
    },
];

const templesNew = temples.filter((temple) => {
    const dedicationYear = Number(temple.dedicated.split(",")[0]);
    return dedicationYear >= 2000;
});

const homeButton = document.querySelector("#homeButton");
const oldButton = document.querySelector("#oldButton");
const newButton = document.querySelector("#newButton");
const largeButton = document.querySelector("#largeButton");
const smallButton = document.querySelector("#smallButton");

homeButton.addEventListener("click", () => {
    createTempleCard(temples);
})

oldButton.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => {
        const dedicationYear = Number(temple.dedicated.split(",")[0]);
        return dedicationYear < 1900;
    }));
})

newButton.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => {
        const dedicationYear = Number(temple.dedicated.split(",")[0]);
        return dedicationYear > 2000;
    }));
})

largeButton.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => {
        const area = Number(temple.area);
        return area > 90000;
    }));
})

smallButton.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => {
        const area = Number(temple.area);
        return area < 10000;
    }));
})

createTempleCard(temples);

function createTempleCard(templesArray) {
    main.querySelectorAll(".temple-card").forEach((card) => card.remove());
    templesArray.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
        <p class="temple-name">${temple.templeName}<p>
        <p><span>Location:</span> ${temple.location}</p>
        <p><span>Dedicated:</span> ${temple.dedicated}</p>
        <p><span>Size:</span> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        `;

        main.append(card);
    });
}