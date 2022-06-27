import {  IPosts } from "./posts";

export class ClassPosts implements IPosts {
    id:number;
    title:string;
    body:string;
    date:string;
    fotografia:string;
    linko:any;
    author:string;
    authorNumero:any
    likedBy:number[]
    comment:[];
    

    constructor(id:number, title:string,body:string,photo:string,link:any, author:string, idUser:any){
        this.id=id
        this.title=title
        this.body=body
        this.date= `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
        this.fotografia=photo
        this.linko=link
        this.author=author
        this.authorNumero=idUser
        this.likedBy=[]
        this.comment=[]
    }
}
