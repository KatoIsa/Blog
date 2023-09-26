const App = {
    RandomImageGenrator: () =>{
        document.addEventListener("DOMContentLoaded", function() {
            const randomImages = [
                "./assets/Icon-1.png",
                "./assets/icon-2.jpg",
                "./assets/icon-4.jpg",
                "./assets/icon.jpg",
                // Add more image URLs as needed
            ];

            const randomImageElements = document.querySelectorAll(".card");

            randomImageElements.forEach(function(element) {
                const randomIndex = Math.floor(Math.random() * randomImages.length);
                const randomImageUrl = randomImages[randomIndex];
                element.style.backgroundImage = `url(${randomImageUrl})`;
            });
            console.log(randomImageElements)
        });

    }
}

App.RandomImageGenrator();