import { IUser } from "./user";

export class UserClass implements IUser{
    id:number;
    email:string;
    password:string;
    name:string;
    surname:string;
    username:string;
    vipmember:boolean;
    creationdate:string;

    constructor(u:IUser){
        this.id=0
        this.email=u.email
        this.password=u.password
        this.name=u.name
        this.surname=u.surname
        this.username=u.username
        this.vipmember=u.vipmember
        this.creationdate= `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`


    }

}
