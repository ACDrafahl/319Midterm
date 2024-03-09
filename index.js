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

            // Display the HTML with dynamic content
            displayHTML(portraitImage, visualAid1, visualAid2);
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayHTML(portraitImage, visualAid1, visualAid2) {
        const visualAidBox = document.getElementById('visualAidBox');
        visualAidBox.innerHTML = `
            <hr class="featurette-divider">
            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">${portraitImage.name}<span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div class="col-md-5">
                    <img src="${portraitImage.image}" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                </div>
            </div>
            <hr class="featurette-divider">
            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1">${visualAid1.description}<span class="text-body-secondary">See for yourself.</span></h2>
                    <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img src="${visualAid1.image}" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                </div>
            </div>
            <hr class="featurette-divider">
            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">${visualAid2.description}<span class="text-body-secondary">Checkmate.</span></h2>
                    <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div class="col-md-5">
                    <img src="${visualAid2.image}" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                </div>
            </div>
            <hr class="featurette-divider">
            <!-- /END THE FEATURETTES -->
        `;
    }
});
