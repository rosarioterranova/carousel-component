export default class Carousel{

    constructor(option){
        this.option = option
        this.cards = this.option.fetchCards()
        this.render()
    }

    render(){
        document.getElementById(this.option.container).innerHTML = `
        <div class="carousel">
            <div class="header">
                <span class="material-icons">${this.option.icon}</span>
                <div class="title">
                    <p>${this.option.title}</p>
                    <p>${this.option.subtitle}</p>
                </div>
            </div>
            <div class="cards-container cards-${this.option.container}"></div>
        </div>
        `;

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