import LikeBody from '../../assets/svg/thumbsUp.svg';
import LikeBackground from '../../assets/svg/thumbsUpBackground.svg'
import styles from './styles.module.css'

export default function LikeButton() {
    return <div className={styles.container}>
        <img src={LikeBody} alt={'like body'}/>
        <img src={LikeBackground} alt={'like background'}/>
    </div>
}