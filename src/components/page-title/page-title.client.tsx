import { Typography } from "@mui/material";
import styles from './page-title.module.css';

interface TitleProps {
    title: String,
}

export default function PageTitle({ title }: TitleProps) {

    return (<div className="container">
        <Typography variant="h1" align="center" classes={{h1: styles.title}}>
            { title }
        </Typography>
    </div>)
}