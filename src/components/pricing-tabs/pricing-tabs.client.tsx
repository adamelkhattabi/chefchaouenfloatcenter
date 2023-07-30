import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { PricingCardProps } from "../pricing-card/pricing-card.client";
import PricingPanel from "../pricing-panel/pricing-panel.client";

interface PricingTabsProps {
    tabs: {
        header: string,
        offers: PricingCardProps[],
    }[]
}

export default function PricingTabs ({ tabs }: PricingTabsProps) {
    const [index, setIndex] = useState(0);
    const headers: string[] = [];
    const offerLists: PricingCardProps[][] = [];

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
        { offerLists.map((offers, i) => <PricingPanel value={index} index={i} offers={offers} key={i} />) }
    </div>)
}