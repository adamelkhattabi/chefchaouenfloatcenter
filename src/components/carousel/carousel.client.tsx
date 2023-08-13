import Carousel from "react-material-ui-carousel";
import CarouselItem from "../carousel-item/carousel-item.client";

interface CarouselItemType {
  title: string,
  image: string,
  content: string
}

interface CarouselProps {
  carouselItems: CarouselItemType[]
}

export default function CustomCarousel({ carouselItems }: CarouselProps) {

    return (<Carousel animation="slide" duration={1000}>
        {carouselItems.map((item, index) => <CarouselItem key={index} image={item.image} title={item.title}>
                {item.content}
            </CarouselItem>)}
      </Carousel>)
}