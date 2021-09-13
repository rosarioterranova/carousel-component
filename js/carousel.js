export default class Carousel{

    constructor(option){
        this.option = option
        this.cards = this.option.fetchCards()
        this.render()
        this.setSlidingEvents()
    }

    setSlidingEvents(){
        const slider = document.querySelector(".cards-container");
        const leftButton = document.querySelector(".left-scroll")
        const rightButton = document.querySelector(".right-scroll")

        const SCROLL_SPEED = 6;
        let scrollDirection = 0; //0 stop, -1 left, +1 right

        leftButton.addEventListener("mousedown", ()=>scrollDirection = -1)
        rightButton.addEventListener("mousedown", ()=>scrollDirection = 1)
        leftButton.addEventListener("mouseup", ()=> scrollDirection = 0);
        rightButton.addEventListener("mouseup", ()=> scrollDirection = 0);

        (function slide() {
            slider.scrollLeft += scrollDirection * SCROLL_SPEED;
            requestAnimationFrame(slide);
        })();
    }

    createCarouselContainer(container){
        container.innerHTML = `
        <div class="carousel">
            <div class="header">
                <div class="icon">
                    <span class="material-icons">${this.option.icon}</span>
                </div>
                <div class="titles">
                    <p class="title">${this.option.title}</p>
                    <p class="subtitle">${this.option.subtitle}</p>
                </div>
            </div>
            <div class="cards-container">
                <div class="scroll-action left-scroll noselect"><</div>
                <div class="cards-overflow">
                    <div class="card dummy-card">
                        <div class="dummy-img"></div>
                        <div class="content">
                            <div><span>Lorem ipsum dolor sit amet</span></div>
                            <div><span>consectetur</span></div>
                        </div>
                    </div>
                    <div class="card dummy-card">
                        <div class="dummy-img"></div>
                        <div class="content">
                            <div><span>Lorem</span></div>
                            <div><span>ipsum dolor sit amet consectetur</span></div>
                        </div>
                    </div>
                    <div class="card dummy-card">
                        <div class="dummy-img"></div>
                        <div class="content">
                            <div><span>Lorem ipsum dolor sit amet</span></div>
                            <div><span>consectetur</span></div>
                            <div><span>consectetur consectetur</span></div>

                        </div>
                    </div>
                </div>
                <div class="scroll-action right-scroll noselect">></div>
            </div>
        </div>
        `;
    }

    createCards(cardsSection, cards){
        for (const card of cards) {
            cardsSection.innerHTML += `
            <div class="card">
                <img src=${card.image} alt="">
                <div class="content">
                    <p class="title">${card.title}</p>
                    <p>text</p>
                </div>
            </div>
            `
        }
    }

    render(){
        const container = document.getElementById(this.option.container)
        this.createCarouselContainer(container)

        //Fetching simulation
        setTimeout(() => {
            container.querySelector(".cards-overflow").innerHTML = ""
            this.createCards(container.querySelector(".cards-overflow"), this.cards)
        },3000)
    }
}