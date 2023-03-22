export interface PostData  {
    hasMore:boolean;
    data:PostItem[]
}

export interface PostItem { 
    avatar:string;
    comments:number;
    date:Date
    didLike:boolean;
    id:string;
    images:string[], 
    likes:number;
    premium:boolean;
    shopId:string;
    shopName:string;
    text:string;
    userId:string
    username:string
}

