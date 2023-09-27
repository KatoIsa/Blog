const App = {
    RandomImageGenrator: () =>{
        document.addEventListener("DOMContentLoaded", function() {
            const randomImages = [
                "./assets/Random-1.png",
                "./assets/Random-3.png",
                "./assets/Random-4.png",
            ];

            const randomImageElements = document.querySelectorAll(".card");

            randomImageElements.forEach(function(element) {
                const randomIndex = Math.floor(Math.random() * randomImages.length);
                const randomImageUrl = randomImages[randomIndex];
                element.style.backgroundImage = `url(${randomImageUrl})`;
            });
        });

    },
    Topicnumber: ()=>{
        // get all card elements and store there length
        const cards = document.querySelectorAll('.card');
        let cardNumber = cards.length;

        // update the number of topics.
        const topicNumber = document.querySelector('.topicNumber');
        topicNumber.innerText = cardNumber;

        // add numbering to the topics ....
        let numberingDiv = document.createElement('div');
        numberingDiv.classList.add('numberingDiv');
        console.log(numberingDiv);

        // for(i = 0; i <= cards.length - 1 ; i++){
        //     cards[i].append(numberingDiv);
        // }
        // cards.forEach((a) => {
        //     a.append(numberingDiv);
        //     console.log(a)
        // })

    }
}

App.RandomImageGenrator();
App.Topicnumber();