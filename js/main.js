import Carousel from "./carousel.js"

const option1 = {
    container:"myCarousel1",
    icon:"collections",
    title:"Fresh and just uploaded content",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fetchCards(chunkSize){
        return [
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
        ]
    }
}

const option2 = {
    container:"myCarousel2",
    icon:"event_seat",
    title:"Another carousel instance title",
    subtitle: "Consectetur adipiscing elit.",
    fetchCards(chunkSize){
        return [
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            },
            {
                image:"https://picsum.photos/400",
                type:"video",
                duration:3600,
                title:"Just a title",
                cardinality: "single"
            }
        ]
    }
}

const carousel1 = new Carousel(option1)
const carousel2 = new Carousel(option2)
