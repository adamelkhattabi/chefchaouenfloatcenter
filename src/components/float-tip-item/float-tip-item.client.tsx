import styles from './float-tip-item.module.css';

interface FloatTipItemProps {
    title: string,
    description: string,
    icon: string
}

export default function FloatTipItem({ title, description, icon } : FloatTipItemProps) {

    return (<div className={styles.container}>
        <div className={styles["icon-holder"]}>
            <img className={styles.icon} src={`/Svg/${icon}.svg`} />
        </div>
        <div className={styles.content}>
            <h4 className={styles.title}>{title}</h4>
            {description}
        </div>
    </div>)
}