import Carousel from "./carousel.js"

const option1 = {
    container:"myCarousel1",
    icon:"collections",
    title:"Fresh and just uploaded content",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    async fetchCards(chunkSize=12){
        const cards = [];
        for (let index = 0; index < chunkSize; index++) {
            const imageRequest = await fetch("https://source.unsplash.com/random");
            const resRandomTitle = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
            const randomTitle = await resRandomTitle.json()
            cards.push({
                image: imageRequest.url,
                type:"video",
                duration:3600,
                title:randomTitle[0].split(" ").slice(0,3).join(" "),
                cardinality: "single"
            });
        }
        return cards;
    }
}

const option2 = {
    container:"myCarousel2",
    icon:"event_seat",
    title:"Another carousel instance title",
    subtitle: "Consectetur adipiscing elit.",
    async fetchCards(chunkSize=3){
        const cards = [];
        for (let index = 0; index < chunkSize; index++) {
            const imageRequest = await fetch("https://source.unsplash.com/random");
            const resRandomTitle = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
            const randomTitle = await resRandomTitle.json()
            cards.push({
                image: imageRequest.url,
                type:"video",
                duration:3600,
                title:randomTitle[0].split(" ").slice(0,3).join(" "),
                cardinality: "single"
            });
        }
        return cards;
    }
}

const carousel1 = new Carousel(option1)
const carousel2 = new Carousel(option2)
