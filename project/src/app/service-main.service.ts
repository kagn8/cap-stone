import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  constructor(private http : HttpClient) { }
  ApiUrlPost:string = 'http://localhost:4201/posts'

  getPosts(){
    return this.http.get<IPosts[]>(this.ApiUrlPost)
  }

  getPost(id:number){
    return this.http.get<IPosts>(`${this.ApiUrlPost}/${id}`)
  }

  createNewPost(post:IPosts):any{
    return this.http.post(this.ApiUrlPost, post)
  }

  updatePost(post:Partial<IPosts>, id:number):any{
    return this.http.patch(`${this.ApiUrlPost}/${id}`, post)
  }

  removePost(id:number):any{
    console.log(`${this.ApiUrlPost}/${id}`);
    console.log(id);
    
    return this.http.delete(`${this.ApiUrlPost}/${id}`)
    
  }
}
