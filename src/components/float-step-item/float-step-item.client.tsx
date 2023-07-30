import styles from './float-step-item.module.css';

export interface FloatStepItemProps {
    index: number;
    title: string;
    children: React.ReactNode;
}

export default function FloatStepItem( { index, title, children }: FloatStepItemProps) {
    return (<div className={styles["step-item"]}>
    <div className={styles["step-icon-holder"]}>
        <span>{index}</span>
    </div>
    <div>
        <h4 className={styles["step-title"]}>{title}</h4>
        {children}
    </div>
</div>)
}