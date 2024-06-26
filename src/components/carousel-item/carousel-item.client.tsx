import styles from './carousel-item.module.css';

interface CarouselItemProps {
    title: string,
    image: string,
    children: string
}

export default function CarouselItem ({ title, image, children }: CarouselItemProps) {

    return (<div className={styles.container}>
        <div className={styles.iconContainer}>
            <img className={styles.icon} src={`/Svg/${image}.svg`} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{children}</p>
    </div>)
}