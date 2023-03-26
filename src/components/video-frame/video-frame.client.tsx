import styles from './video-frame.module.css';

export default function VideoFrame({ videoUrl, title }: any) {

    return (<div className={`ratio ratio-16x9 ${styles.container}`}>
        <iframe style={{ borderRadius: '10px' }} width={'100%'} height={'100%'} src={videoUrl} title={title} allowFullScreen>

        </iframe>
    </div>)
}