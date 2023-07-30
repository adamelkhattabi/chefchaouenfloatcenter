import styles from './section-paragraph.module.css'

export default function SectionParagraph({ children, ...rest }: any) {
    return <p className={styles.paragraph} {...rest}>
        {children}
    </p>
}