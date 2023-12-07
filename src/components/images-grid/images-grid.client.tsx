import styles from './images-grid.module.css';

export default function ImagesGrid() {

    return (<div className="container">
        <div className={styles.container}>
        <div className={`row ${styles.row}`}>
            <div className='col-xs-12 col-sm-6'>
                <div className={styles.imageBlock}>
                    <div
                        className={styles.imageBg}
                        style={{ backgroundImage: "url('/images/floating_tank_1.jpg')"}}
                    ></div>
                </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
                <div className={styles.imageBlock}>
                    <div
                        className={styles.imageBg}
                        style={{ backgroundImage: "url('/images/massage_room_1.jpg')"}}
                    ></div>
                </div>
            </div>
        </div>
        <div className={`row ${styles.row}`}>
            <div className='col-xs-12 col-sm-6'>
                <div className={styles.imageBlock}>
                    <div
                        className={styles.imageBg}
                        style={{ backgroundImage: "url('/images/lobby_4.jpg')"}}
                    ></div>
                </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
                <div className={styles.imageBlock}>
                    <div
                        className={styles.imageBg}
                        style={{ backgroundImage: "url('/images/lobby_3.jpg')"}}
                    ></div>
                </div>
            </div>
        </div>
        </div>
    </div>)
}