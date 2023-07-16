import { Link } from '@shopify/hydrogen'
import styles from './link-button.module.css';

interface LinkButtonProps {
    to: string;
    label: string;
};

export default function LinkButton({ to = '/', label }: LinkButtonProps) {
    return <Link to={to} className={`btn ${styles["custom-button"]}`}>
        <span>{label}</span>
    </Link>
}