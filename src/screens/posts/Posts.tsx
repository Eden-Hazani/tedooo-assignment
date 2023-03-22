import React, { useEffect, useRef } from "react";
import axios from "axios";
import styles from './styles.module.css'
import Post from "../../components/postItem/Post";
import { getFeedData } from "../../api/feedData";
import {PostItem} from "../../interfaces/Posts";


export default function Posts() {
    const [currentItems, setCurrentItems] = React.useState<PostItem[]>([]);
    const [allowFetch, setAllowFetch] = React.useState<boolean>(true);

    const ref = useRef<HTMLDivElement>(null);

    
    useEffect(() => {
        const loadItems = async () => {
            const response = await getFeedData(currentItems.length);
            if(!response.hasMore) {
                setAllowFetch(false);
                return;
            }
            setCurrentItems([...currentItems, ...response.data]);
        }
        const loadOnScroll = () => {
            if(!ref.current) return;
            (ref.current.getBoundingClientRect().bottom-300) <= window.innerHeight && allowFetch && loadItems();
        }
        if(currentItems.length === 0 && allowFetch) loadItems();
        window.addEventListener('scroll', loadOnScroll);
        return () => window.removeEventListener('scroll', loadOnScroll);
    }, [currentItems, allowFetch]);
    
    const updatePost=(newItem:PostItem)=>{
        setCurrentItems(PS=>[...PS].map((item) => item.id === newItem.id ? newItem : item));
    };

    return (
        <div className={styles.container} ref={ref}>
            {currentItems.map((item, index) => <Post
                updatePost={updatePost}
                item={item}
                key={item.id} />
            )}
        </div>
    );
}