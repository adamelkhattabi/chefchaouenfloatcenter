import styles from './why-float-section.module.css';
import CarouselItem from '../carousel-item/carousel-item.client';
import Carousel from '../carousel/carousel.client';

interface WhyFloatSectionProps {
    header: string,
    reasons: {
        title: string,
        content: string,
        image: string
    }[]
}

export default function WhyFloatSection({ header, reasons }: WhyFloatSectionProps) {
    return (<div className='content-section'>
        <h4 className={styles.header}>{header}</h4>
        <div className={styles.bigScreen}>
            {reasons.map((item, index) => <CarouselItem key={index} image={item.image} title={item.title}>
                {item.content}
            </CarouselItem>)}
        </div>

        <div className={styles.smallScreen}>
            <Carousel carouselItems={reasons} />
        </div>
    </div>)
}