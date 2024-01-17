import { Link} from '@shopify/hydrogen';
import { Drawer, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './drawer.module.css';

interface DrawerProps {
  links: LinkData[],
  anchor: 'right' | 'left',
  open: boolean,
  onClose: () => any
}

interface LinkData {
  label: string,
  path: string
}

export default function DrawerMenu({ links, anchor = 'right', open, onClose }: DrawerProps) {
  
  return (<div>
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      classes={{
        root: styles.root,
        paper: styles.paper
      }}
    >
      <IconButton
        onClick={onClose}
        size='small'
        aria-label='close'
        classes={{ root: styles.closeButton }}
      >
        <ClearIcon />
      </IconButton>
      <img width={'100%'} src="/images/logo___1_-removebg-preview.png" />
      <nav className={styles.navbar}>
        {links.map((link, index) =>
          <Link onClick={onClose} key={index} className={styles.link} to={link.path}>
            {link.label}
          </Link>)}
      </nav>
    </Drawer>
  </div>);
}
