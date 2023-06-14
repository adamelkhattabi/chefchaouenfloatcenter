import styles from './footer.module.css';
import { Link } from '@shopify/hydrogen';

export default function Footer() {

    return (<div className={styles.footer}>
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12'>
                    <div className={styles.footer_container}>
                        <Link to='/' className={styles.footer_brand}>
                            <img width={'100%'} src="/images/logo___1_-removebg-preview.png" />
                        </Link>
                        <a className={styles.footer_info} href='mailto:info@chefchaouenfloating.com'>
                            <span className={styles.footer_mailIcon}>
                                <img src='/images/email@2x.png' />
                            </span>
                            <span className={styles.footer_mail}>&nbsp;info@chefchaouenfloating.com&nbsp;</span>
                        </a>
                        <a className={styles.footer_info} href='tel:0666666666'>
                            <span className={styles.footer_mailIcon}>
                                <img src='/images/phone@2x.png' />
                            </span>
                            <span className={styles.footer_mail}>&nbsp;0666666666&nbsp;</span>
                        </a>
                        <ul className={styles.footer_social}>
                            <li>
                                <a href='https://web.facebook.com/FALOOUJA' target='_blank'>
                                    <img src='/images/f-b@2x.png' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/moul_ndader_officiel/' target='_blank'>
                                    <img src='/images/insta@2x.png' />
                                </a>
                            </li>
                            <li>
                                <a href='https://twitter.com/moul_ndader2' target='_blank'>
                                    <img src='/images/twitter@2x.png' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/moul-ndader-80493819b/' target='_blank'>
                                    <img src='/images/linked@2x.png' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}