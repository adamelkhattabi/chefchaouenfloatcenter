import styles from './page-title.module.css';

interface TitleProps {
    title: String,
    paragraph?: React.ReactNode
}

export default function PageTitle({ title, paragraph }: TitleProps) {

    return (<div className="container">
        <h1 className={styles.title}>
            { title }
        </h1>
        { paragraph ?
            <p className={styles.paragraph}>{paragraph}</p> : null }
    </div>)
}