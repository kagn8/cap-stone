export interface IPosts {
    id:number;
    title:string;
    body:string;
    date:string;
    fotografia:string;
    linko:any;
    author:string;
    authorNumero:any;
    likedBy:number[];
    comment:Icomment[]
}

export interface Icomment {
    autore:string;
    testo:string
}
