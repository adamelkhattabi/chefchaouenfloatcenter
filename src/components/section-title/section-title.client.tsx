import styles from './section-title.module.css';

interface SectionTitleProps {
    children: string
}

export default function SectionTitle({ children }: SectionTitleProps) {

    return (<h2 className={styles.title}>{children}</h2>)
}