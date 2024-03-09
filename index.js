document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Find the image with the id "portrait"
            const portraitImage = data.find(image => image.id === "portrait");

            // Find the images with the ids "visual_aid_1" and "visual_aid_2"
            const visualAid1 = data.find(image => image.id === "visual_aid_1");
            const visualAid2 = data.find(image => image.id === "visual_aid_2");

            // Display the portrait and the first visual aid
            displayPortraitAndVisualAid(portraitImage, visualAid1);

            // Add event listener to arrow button to switch to the second visual aid
            const arrowButton = document.getElementById('arrowButton');
            arrowButton.addEventListener('click', function () {
                displayPortraitAndVisualAid(portraitImage, visualAid2);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayPortraitAndVisualAid(portraitImage, visualAid) {
        const portraitAndVisualAidBox = document.getElementById('portraitAndVisualAid');
        portraitAndVisualAidBox.innerHTML = `
        <div class="col-md-4">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h2 class="featurette-heading fw-normal lh-1">${portraitImage.name}</h2>
                <img src="${portraitImage.image}" width="400px" height="auto" alt="Placeholder image of Michael"
                    class="bd-placeholder-img">
            </div>
        </div>
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-12">
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="${visualAid.image}" alt="Placeholder: 500x500">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <h2 class="featurette-heading fw-normal lh-1">${visualAid.description}</h2>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <button id="arrowButton" class="btn btn-primary">Next</button>
                </div>
            </div>
        </div>
        `;
    }
});