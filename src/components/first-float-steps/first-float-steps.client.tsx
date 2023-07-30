import FloatStepItem from "../float-step-item/float-step-item.client";
import SectionTitle from "../section-title/section-title.client";
import styles from './first-float-steps.module.css';

interface FirstFloatStepsProps {
    steps: {
        title: string;
        paragraph: string;
    }[];
}

export default function FirstFloatSteps({ steps }: FirstFloatStepsProps) {

    return (<div className='container'>
    <SectionTitle>Your first float</SectionTitle>
    <div className={styles.container}>
        <div className={styles["image-container"]}>
            <img className={styles.image} src="/images/man-floating.jpeg" />
        </div>
        <div className={styles["steps-list"]}>
            {steps.map(({ title, paragraph}, index) => (<FloatStepItem title={title}  index={index + 1} key={index}>{paragraph}</FloatStepItem>))}
        </div>
    </div>
  </div>)
}