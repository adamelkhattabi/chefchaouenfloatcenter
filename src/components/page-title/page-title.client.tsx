import { Typography } from "@mui/material";
import styles from './page-title.module.css';

interface TitleProps {
    title: String,
}

export default function PageTitle({ title }: TitleProps) {

    return (<div className="container">
        <h1 className={styles.title}>
            { title }
        </h1>
    </div>)
}