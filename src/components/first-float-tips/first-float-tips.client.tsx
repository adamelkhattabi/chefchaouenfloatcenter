import FloatTipItem from "../float-tip-item/float-tip-item.client";
import SectionTitle from "../section-title/section-title.client";
import styles from './first-float-tips.module.css';

interface FirstFloatTipsProps {
    tips: {
        title: string,
        description: string,
        icon: string
    }[]
}

export default function FirstFloatTips({ tips }: FirstFloatTipsProps) {

    return (<div className="container">
        <SectionTitle>Tips to improve your float experience</SectionTitle>
        <div className={styles["tips-list"]}>
            {
                tips.map((tip, index) => <FloatTipItem
                title={tip.title}
                description={tip.description}
                icon={tip.icon}
                key={index}
            />)
            }
        </div>
    </div>)
}