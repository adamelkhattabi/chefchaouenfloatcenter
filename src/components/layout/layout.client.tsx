import { useState } from 'react';
import DrawerMenu from "../drawer-menu/drawer-menu.client";
import { Container } from '@mui/material';
import Header from "../header/header.client";
import styles from "./layout.module.css";

interface LayoutProps {
    rtl?: boolean,
    topContent?: React.ReactNode,
    mainContent?: React.ReactNode,
    footerContent?: React.ReactNode
}
export default function Layout({ rtl = false, topContent, mainContent, footerContent }: LayoutProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const links = [
        { label: 'Home', path: '/' },
        { label: 'First Float', path: '/first-float' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'About Floating', path: '/about-floating' },
        { label: 'Contact Us', path: '/' },
    ]

    return(<div>
        <Header buttonAction={() => { setDrawerOpen((open) => !open)}}/>
        <Container classes={{root: [styles.container, styles["top-container"]].join(" ")}} maxWidth={false} >
            {topContent}
        </Container>
        <Container maxWidth={false} component={'main'} classes={{root: `${styles.container} ${styles["main-container"]}`}}>
            {mainContent}
        </Container>
        <Container maxWidth={false} component={'footer'}>
            {footerContent}
        </Container>
        
        <DrawerMenu
            anchor={rtl ? 'left' : 'right'} 
            links={links}
            open={drawerOpen}
            onClose={() => { setDrawerOpen(false) }}
        />
        <div className={styles.background}>
            <video
                className={styles.video}
                autoPlay
                loop
                muted
                poster='/images/stars@3x.jpg'
            >
                <source src='/bg-video.mp4' type='video/mp4' />
            </video>
        </div>
    </div>)
}