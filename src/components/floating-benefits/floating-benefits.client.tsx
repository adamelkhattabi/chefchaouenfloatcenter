import Carousel from "../carousel/carousel.client";
import CarouselItem from "../carousel-item/carousel-item.client";
import SectionTitle from "../section-title/section-title.client";
import styles from "./floating-benefits.module.css";

export default function FloatingBenefits() {

    return (<div className="container">
            <SectionTitle>Floating benefits</SectionTitle>
            <div className={styles.bigScreen}>
            <CarouselItem imagePath='/images/lightbulb@2x.png' title='Creativity & Mindfulness'>
                Spending time away from processing the external world allows your mind to slow down, organize itself and go on a journey of pure awareness.
            </CarouselItem>
            <CarouselItem imagePath='/images/mandala@2x.png' title='Stress and Anxiety release'>
                Using the tank for even an hour can de-stress your nervous system and stop the production of stress hormones, leaving you feeling relaxed and re-energized.
            </CarouselItem>
            <CarouselItem imagePath='/images/dumbell@2x.png' title='Pain relief and muscle recovery'>
                The Epsom salt in the water eases muscles and joints aches and stiffness and aids in reducing chronic pain and facilitating recovery from injuries.
            </CarouselItem>
        </div>

        <div className={styles.smallScreen}>
            <Carousel />
        </div>
    </div>)
}