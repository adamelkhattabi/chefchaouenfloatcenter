import styles from './video-frame.module.css';

export default function VideoFrame({ videoUrl, title }: any) {

    return (<div className={`ratio ratio-1x1 ${styles.container}`}>
        <iframe style={{ borderRadius: '10px' }} width={'100%'} src={videoUrl} title={title} allowFullScreen>

        </iframe>
    </div>)
}