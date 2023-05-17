export type User = {
    image: string
    name: string
    username: string
}

export type Reply = {
    id?: number
    content: string
    replyingTo: string
    user: User
    replies?:Reply[]
}

export type Comment = {
    id?: number
    content: string
    user: User
    replyingTo?: string
    replies?: Reply[] 
}

export type Data = {
    id: number
    title: string
    category: string
    upvotes: number
    status: string
    description: string
    comments: Comment[]
}

export interface ProductRequest {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: Comment[];
}

export interface AppState {
    sidebar:boolean
    filter:string
    category:string
    currentUser: User;
    comments: Comment[]
    product:{
        id:number
        title:string
        category:string
        upvotes: number 
        status: string 
        description: string
        comments: Comment[];

    }
}

