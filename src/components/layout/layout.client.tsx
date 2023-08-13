import { useState } from 'react';
import LinkButton from '../link-button/link-button.client';
import DrawerMenu from "../drawer-menu/drawer-menu.client";
import Header from "../header/header.client";
import styles from "./layout.module.css";
import Footer from '../footer/footer.client';

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
    ]

    return(<div>
        <div className={`container-fluid ${styles['header-section']}`}>
            <div className='row'>
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
                <Header buttonAction={() => { setDrawerOpen((open) => !open)}}/>
                <div className={`container-fluid ${styles.container} ${styles["top-container"]}`} >
                    {topContent}
                </div>
                <div className={styles['wave-bottom']}>
                    <img src='/images/wave-bottom.png' />
                </div>
            </div>
        </div>

        <main
            className={`container-fluid ${styles.container} ${styles["main-container"]}`}
        >
            {mainContent}
        </main>
        <div className={`container-fluid ${styles["bottom-container"]}`}>
            <div className='row'>
                <div className={styles['wave-top']}>
                    <img src='/images/wave-top.png' />
                    <div className={`container-fluid text-center ${styles["btn-book-now"]}`}>
                        <LinkButton to='/pricing' label='Book Now' />
                    </div>
                </div>
                {footerContent}
                <Footer />
            </div>
        </div>
        
        <DrawerMenu
            anchor={rtl ? 'left' : 'right'} 
            links={links}
            open={drawerOpen}
            onClose={() => { setDrawerOpen(false) }}
        />
    </div>)
}