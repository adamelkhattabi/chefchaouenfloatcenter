import { useState } from "react";
import { Tabs, Tab, Dialog } from "@mui/material";
import { Offer } from "../pricing-card/pricing-card.client";
import PricingPanel from "../pricing-panel/pricing-panel.client";
import SectionTitle from "../section-title/section-title.client";
import { WhatsApp, Instagram, Phone, Email } from '@mui/icons-material';
import styles from './pricing-tabs.module.css';

interface PricingTabsProps {
    tabs: {
        header: string,
        offers: Offer[],
    }[]
}

export default function PricingTabs ({ tabs }: PricingTabsProps) {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const headers: string[] = [];
    const offerLists: Offer[][] = [];

    tabs.forEach(tab => {
        headers.push(tab.header);
        offerLists.push(tab.offers);
    })

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setIndex(newValue);
    };

    return (<div className="container">
        <Tabs
            value={index}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
        >
            { headers.map((header, i) => <Tab label={header} key={i} />) }
        </Tabs>
        { offerLists.map((offers, i) => <PricingPanel openModal={openModal} value={index} index={i} offers={offers} key={i} />) }

        <Dialog open={open} onClose={() => { setOpen(false)}}>
            <div className="container">
                <SectionTitle>Make your reservation</SectionTitle>
                <div>
                    <span>Online reservations will be available soon. In the meantime, you can contact us directly by clicking the links below</span>
                </div>
                <div>
                    <ul className={styles.contactList}>
                        <li>
                            <a href='mailto:contact@chefchaouenfloating.com'>
                                <span>
                                    <Email />
                                </span>
                                <span>&nbsp;Send us an email&nbsp;</span>
                            </a>
                        </li>
                        <li>
                            <a href='tel:+212622156902'>
                                <span>
                                    <Phone />
                                </span>
                                <span>&nbsp;+212622156902&nbsp;</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://wa.me/+212622156902' target='_blank'>
                                <WhatsApp />
                                <span>&nbsp;Contact us via WhatsApp&nbsp;</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/chefchaouen_floatation_center/' target='_blank'>
                                <Instagram />
                                <span>&nbsp;Send a DM on Instagram&nbsp;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    </div>)
}