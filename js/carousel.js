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

    render(){
        //Creating carousel container
        document.getElementById(this.option.container).innerHTML = `
        <div class="carousel">
            <div class="header">
                <span class="material-icons">${this.option.icon}</span>
                <div class="title">
                    <p>${this.option.title}</p>
                    <p>${this.option.subtitle}</p>
                </div>
            </div>
            <div class="cards-container">
                <div class="scroll-action left-scroll"><</div>
                <div class="cards-overflow cards-${this.option.container}"></div>
                <div class="scroll-action right-scroll">></div>
            </div>
        </div>
        `;

        //Creating cards collection
        const cardsSection = document.querySelector(`.cards-${this.option.container}`)
        for (const card of this.cards) {
            cardsSection.innerHTML += `
            <div class="card">
                <img src=${card.image} alt="">
                <p>${card.title}</p>
            </div>
            `
        }
    }
}