import styles from './carousel-item.module.css';

interface CarouselItemProps {
    title: string,
    imagePath: string,
    children: string
}

export default function CarouselItem ({ title, imagePath, children }: CarouselItemProps) {

    return (<div className={styles.container}>
        <div className={styles.iconContainer}>
            <img src={imagePath} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{children}</p>
    </div>)
}