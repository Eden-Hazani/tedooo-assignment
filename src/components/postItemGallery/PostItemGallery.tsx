import styles from './styles.module.css'

interface Props{
    images: string[]
}

export default function PostItemGallery({images}:Props) {
    return !images.length ? <div>no images</div> : <div className={styles.container}>
        {images.map((img,index)=><img style={{width:`${100/images.length}%`}} key={img} src={img} alt={`img${index}`}/>)}
    </div>
}