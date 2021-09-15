export default class Carousel{

    constructor(option){
        this.option = option
        this.init()
    }

    async init(){
        //Render container with skeleton loading
        const containerRef = document.getElementById(this.option.container)
        this.renderCarouselContainer(containerRef)

        //Render cards
        const cards = await this.option.fetchCards()
        containerRef.querySelector(".cards-overflow").innerHTML = "" //remove skeleton
        this.renderCards(containerRef.querySelector(".cards-overflow"), cards)

        //Set events
        this.setSlidingEvents(containerRef)
        this.setMouseScrollingEvents(containerRef)
    }

    renderCarouselContainer(containerRef){
        containerRef.innerHTML = `
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

    renderCards(cardsOverflowRef, cards){
        for (const card of cards) {
            cardsOverflowRef.innerHTML += `
            <div class="card">
                <img src=${card.image} alt="">
                <div class="content">
                    <p class="title">${card.title}</p>
                    <p>${card.cardinality}</p>
                </div>
            </div>
            `
        }
    }

    setSlidingEvents(containerRef){
        const sliderRef = containerRef.querySelector(".cards-container");
        const leftButtonRef = containerRef.querySelector(".left-scroll")
        const rightButtonRef = containerRef.querySelector(".right-scroll")

        const SCROLL_SPEED = 6;
        let scrollDirection = 0; //0 stop, -1 left, +1 right

        //Button sliding
        leftButtonRef.addEventListener("mousedown", ()=>scrollDirection = -1);
        rightButtonRef.addEventListener("mousedown", ()=>scrollDirection = 1);
        leftButtonRef.addEventListener("mouseup", ()=> scrollDirection = 0);
        rightButtonRef.addEventListener("mouseup", ()=> scrollDirection = 0);

        (function slide() {
            sliderRef.scrollLeft += scrollDirection * SCROLL_SPEED;
            requestAnimationFrame(slide);
        })();
    }

    setMouseScrollingEvents(containerRef){
        const sliderRef = containerRef.querySelector('.cards-container');
        let isDown = false;
        let startX;
        let scrollLeft;
        const SCROLL_SPEED = 2;

        sliderRef.addEventListener('mousedown', e => {
            isDown = true;
            sliderRef.classList.add('active');
            startX = e.pageX - sliderRef.offsetLeft;
            scrollLeft = sliderRef.scrollLeft;
        });

        sliderRef.addEventListener('mouseleave', _ => {
            isDown = false;
            sliderRef.classList.remove('active');
        });

        sliderRef.addEventListener('mouseup', _ => {
            isDown = false;
            sliderRef.classList.remove('active');
        });

        sliderRef.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderRef.offsetLeft;
            const walk = (x - startX) * SCROLL_SPEED;
            sliderRef.scrollLeft = scrollLeft - walk;
        });
    }
}