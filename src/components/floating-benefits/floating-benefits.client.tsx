import Carousel from "../carousel/carousel.client";
import CarouselItem from "../carousel-item/carousel-item.client";
import SectionTitle from "../section-title/section-title.client";
import styles from "./floating-benefits.module.css";

export default function FloatingBenefits() {

    let carouselItems = [
        {
            title: 'Reduces Anxiety & Stress',
            imagePath: '/images/mandala@2x.png',
            content: 'imparts more magnesium in your system and lowers levels of cortisol.in the absence of stimulants you achieve the same relaxation level of a 4 hours REM sleep within an hour of floating.'
        },
        {
            title: 'Promotes mindfulness & deep meditation',
            imagePath: '/images/lightbulb@2x.png',
            content: 'Float tanks can be an ideal environment for meditation practices, as they provide a peaceful and distraction-free space that can help you to focus and achieve a deeper level of relaxation.'
        },
        {
            title: 'Replenishes creativity and focus',
            imagePath: '/images/dumbell@2x.png',
            content: 'explore a dreamy state, The Theta State and deep relaxation of floating allows you to tap into the creative and intellectual power of your subconscious mind.'
        }
    ]

    return (<div className="container">
        <SectionTitle>Floating benefits</SectionTitle>
        <div className={styles.bigScreen}>
            {carouselItems.map((item, index) => <CarouselItem key={index} imagePath={item.imagePath} title={item.title}>
                {item.content}
            </CarouselItem>)}
        </div>

        <div className={styles.smallScreen}>
            <Carousel carouselItems={carouselItems} />
        </div>
    </div>)
}