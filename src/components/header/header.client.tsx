import { IconButton, Container } from "@mui/material";
import { Link } from '@shopify/hydrogen';
import styles from './header.module.css';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    buttonAction: () => any
}
export default function Header({ buttonAction }: HeaderProps) {

    return (<Container classes={{ root: styles.header}}>
        <Link className={styles.imageContainer} to={'/'}>
            <img width={'100%'} src="/images/logo___1_-removebg-preview.png" />
        </Link>
        
        <IconButton
            onClick={buttonAction}
            disableFocusRipple
            disableRipple
            classes={{ root: styles.button }}
            size='small'
        ><MenuIcon/></IconButton>
    </Container>)
}