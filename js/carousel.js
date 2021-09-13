export default class Carousel{

    constructor(option){
        this.option = option
        this.init()
    }

    init(){
        const container = document.getElementById(this.option.container)
        this.renderCarouselContainer(container)
        
        setTimeout(() => { //Fetching simulation
            const cards = this.option.fetchCards()
            container.querySelector(".cards-overflow").innerHTML = "" //remove skeleton
            this.renderCards(container.querySelector(".cards-overflow"), cards)
            this.setSlidingEvents(container)
            this.setMouseScrollingEvents(container)
        },3000)

    }

    renderCarouselContainer(container){
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

    renderCards(cardsSection, cards){
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

    setSlidingEvents(container){
        const slider = container.querySelector(".cards-container");
        const leftButton = container.querySelector(".left-scroll")
        const rightButton = container.querySelector(".right-scroll")

        const SCROLL_SPEED = 6;
        let scrollDirection = 0; //0 stop, -1 left, +1 right

        //Button sliding
        leftButton.addEventListener("mousedown", ()=>scrollDirection = -1);
        rightButton.addEventListener("mousedown", ()=>scrollDirection = 1);
        leftButton.addEventListener("mouseup", ()=> scrollDirection = 0);
        rightButton.addEventListener("mouseup", ()=> scrollDirection = 0);

        (function slide() {
            slider.scrollLeft += scrollDirection * SCROLL_SPEED;
            requestAnimationFrame(slide);
        })();
    }

    setMouseScrollingEvents(container){
        const slider = container.querySelector('.cards-container');
        let isDown = false;
        let startX;
        let scrollLeft;
        const SCROLL_SPEED = 2;

        slider.addEventListener('mousedown', e => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', _ => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', _ => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * SCROLL_SPEED;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    
}