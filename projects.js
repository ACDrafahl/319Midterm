document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {

            const project1 = data.find(image => image.id === "project1");
            const project2 = data.find(image => image.id === "project2");
            const project3 = data.find(image => image.id === "project3");

            // Display the HTML with dynamic content
            displayCarousel(project1, project2, project3);
        })
        .catch(error => console.error('Error fetching data:', error));

        //${portraitImage.image}

    function displayCarousel(project1, project2, project3) {
        const carouselDisplayer = document.getElementById('carouselDisplayer');
        carouselDisplayer.innerHTML = `
        <style>
                .carousel-caption h1, .carousel-caption p {
                    color: white;
                    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
                }
            </style>
            <div class="carousel-item active">
                <img src="${project1.image}" class="d-block w-100" alt="${project1.id}">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>${project1.title}</h1>
                        <p>${project1.description}</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="${project2.image}" class="d-block w-100" alt="${project2.id}">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>${project2.title}</h1>
                        <p>${project2.description}</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="${project3.image}" class="d-block w-100" alt="${project3.id}">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>${project3.title}</h1>
                        <p>${project3.description}</p>
                    </div>
                </div>
            </div>
        `;
    }
});
