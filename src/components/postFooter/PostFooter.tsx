import styles from './styles.module.css'
import Like from '../../assets/svg/likeButton.svg';
import GrayLike from '../../assets/svg/grayLike.svg'
import Message from '../../assets/svg/message.svg';

interface Props{
    didLike: boolean;
    onLike: () => void;
}

export default function PostFooter({didLike, onLike}:Props) {
    return <div className={styles.container}>
        <div onClick={onLike}>
            <img src={didLike ? Like : GrayLike} alt={'like'}/>
            <p style={{color:didLike? '#0A66C2':'black'}}>Like</p>
        </div>
        <div>
            <img src={Message} alt={'message'}/>
            <p>Message</p>
        </div>
    </div>
}