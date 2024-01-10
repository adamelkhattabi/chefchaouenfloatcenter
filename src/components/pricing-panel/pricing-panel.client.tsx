import PricingCard, { Offer } from "../pricing-card/pricing-card.client";
import TabPanel from "../tab-panel/tab-panel.client";
import styles from './pricing-panel.module.css';

export interface PricingPanelProps {
    offers: Offer[],
    value: number,
    index: number,
    openModal: () => void
}

export default function PricingPanel ({ offers, value, index, openModal }: PricingPanelProps) {
    return <TabPanel
        value={value}
        index={index}
        className="container main-content"
    >
        <div className={`row ${styles.container} five-cols`}>
        { offers.map((offer, index) => (<PricingCard {...offer} key={index} openModal={openModal} />)) }
    </div>
    </TabPanel>
}