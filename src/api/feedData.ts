import axios from 'axios';
import {PostData} from '../interfaces/Posts';


export const getFeedData = async (skip:number) => {
    const url = `https://dev.tedooo.com/hw/feed.json?skip=${skip}`;
    const response = await axios.get<PostData>(url);
    return response.data;
}

export const sendPostInteraction= async (itemId:string) => {
    const url = `https://dev.tedooo.com/?itemId=${itemId}`;
    axios.get(url);
}