import PricingCard, { PricingCardProps } from "../pricing-card/pricing-card.client";
import TabPanel from "../tab-panel/tab-panel.client";
import styles from './pricing-panel.module.css';

export interface PricingPanelProps {
    offers: PricingCardProps[],
    value: number,
    index: number
}

export default function PricingPanel ({ offers, value, index }: PricingPanelProps) {
    return <TabPanel
        value={value}
        index={index}
        className="container main-content"
    >
        <div className={`row ${styles.container} five-cols`}>
        { offers.map((offer, index) => (<PricingCard {...offer} key={index} />))}
    </div>
    </TabPanel>
}