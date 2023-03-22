import { sendPostInteraction } from '../../api/feedData'
import useInView from '../../hooks/useInView'
import { PostItem } from '../../interfaces/Posts'
import LikeButton from '../../utilityComponents/likeButton/LikeButton'
import PostFooter from '../postFooter/PostFooter'
import PostItemGallery from '../postItemGallery/PostItemGallery'
import styles from './styles.module.css'

interface Props{
    item: PostItem
    updatePost: (post: PostItem) => void
}

export default function Post({item,updatePost}:Props) {

    const ref =useInView(()=>sendPostInteraction(item.id));

    const likePost = () => {
        updatePost({...item, 
            likes: item.likes + (item.didLike ? -1 : 1),
            didLike: !item.didLike
        })
    }

    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.avatarContainer}>
                <img src={item.avatar} alt={'avatar'}/>
                <div>
                    <h2>{item.username}</h2>
                    <h3>{item.shopName}</h3>
                </div>
            </div>
            <p className={styles.postDescription}>{item.text}</p>
            <PostItemGallery images={item.images.slice(0, 2)}/>
            <div className={styles.LikeContainer}>
                <div className={styles.likeBox}>
                    <LikeButton/>
                    <p>{item.likes}</p>
                </div>
                <p>{item.comments} comments</p>
            </div>
            <div className={styles.footerBorder}></div>
            <PostFooter onLike={likePost} didLike={item.didLike}/>
        </div>
    )
}