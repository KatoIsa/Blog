const App = {
    RandomImageGenrator: () => {
        const randomImages = [
            "./assets/Random-3.jpg",
            "./assets/Random-4.jpg",
        ];

        const randomImageElements = document.querySelectorAll(".GridLayOut .card");

        randomImageElements.forEach(function (element) {
            const randomIndex = Math.floor(Math.random() * randomImages.length);
            const randomImageUrl = randomImages[randomIndex];
            element.style.backgroundImage = `url(${randomImageUrl})`;
        });
    },
    removeRandomImages: () => {
        const randomImageElements = document.querySelectorAll(".card");
        randomImageElements.forEach(function (element) {
            element.style.backgroundImage = `unset`;
        });
    },
    Topicnumber: () => {
        // get all card elements and store there length
        const cards = document.querySelectorAll('.card');
        const cardNumber = cards.length;

        // update the number of topics.
        const topicNumber = document.querySelector('.topicNumber');
        topicNumber.innerText = cardNumber;

        for (i = 0; i <= cards.length; i++) {
            // add numbering to the topics ....

            if (cards[i]) {
                const numberingDiv = document.createElement('div');
                numberingDiv.classList.add('numberingDiv');

                numberingDiv.innerHTML = i + 1;
                // cards[i].append(numberingDiv);
                cards[i].appendChild(numberingDiv)
            }
        }

    },
    ViewType: () => {
        // Get buttons that are gonna handle the view state ...
        const ListView = _.Select('.ListViewType');
        const GridView = _.Select('.GridviewType');

        _.Event(ListView, 'click', () => {
            _.addClass(ListView, 'active');
            _.removeClass(GridView, 'active');
            _.removeClass(_.Select('.cardsSection'), 'GridLayOut');
            _.addClass(_.Select('.cardsSection'), 'ListLayout');
            _.Select('.ViewType .type').innerHTML = `<tt>List</tt>`;
            App.removeRandomImages();
        }, true)

        _.Event(GridView, 'click', () => {
            _.removeClass(ListView, 'active');
            _.addClass(GridView, 'active');
            _.removeClass(_.Select('.cardsSection'), 'ListLayout');
            _.addClass(_.Select('.cardsSection'), 'GridLayOut');
            _.Select('.ViewType .type').innerHTML = `<tt>Grid</tt>`;
            App.RandomImageGenrator();
        }, true)
    },
    ContentPageRedirect: () => {
        // get all card elements.
        const cards = document.querySelectorAll('.card');
        const link = './Content.html';

        // lets add a redirect button to each element
        for (i = 0; i <= cards.length; i++) {
            if (cards[i]) {
                const button = _.HTMLcreate('div');
                _.addClass(button, 'redirectButton')
                button.innerHTML = `<a href=${link}><span></span></a>`;

                cards[i].appendChild(button);
                _.Event(cards[i], 'mouseover', ()=>{
                    _.addClass(button, 'showButton');
                }, true);
                _.Event(cards[i], 'mouseout', ()=>{
                    _.removeClass(button, 'showButton');
                }, true);
            }
        }
    }
}

App.Topicnumber();
App.ViewType();
App.ContentPageRedirect();