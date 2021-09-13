export default class Carousel{

    constructor(option){
        this.option = option
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
        </div>
        `
    }
}