import styles from './pricing-card.module.css';
import { Check } from '@mui/icons-material'

export interface PricingCardProps {
    title: string,
    currencySymbol: string,
    price: number,
    interval: string,
    features: string[]
}

export default function PricingCard({
    title,
    currencySymbol = '$',
    price,
    interval,
    features = []
}: PricingCardProps) {
    return (<div className={styles.mainContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div>
            <h4 className={styles.price}>
                <span>{currencySymbol}</span>
                {price}
            </h4>
            <span className={styles.interval}>{interval}</span>
            <div>
                <div>
                    <ul className={styles.featuresList}>
                        {features.map(feature => (<li>
                            <Check className={styles.checkIcon} />
                            {feature}
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}