import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthData, AuthService } from '../auth-service.service';
import { IPosts } from '../posts';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user!:AuthData|null;

  postMod!:IPosts

 

  opzPost:boolean=false;
  modifica:boolean=false;

  opzioniPost(post:any){
    
    this.postMod=post
    this.opzPost=!this.opzPost
  }
  
  upPost:any={
    title:"",
    body:"",
    linko:"",
    fotografia:""
  }

  modificaPost(){
    this.modifica=!this.modifica
    this.opzPost=!this.opzPost

    

    this.upPost.title=this.postMod.title
    this.upPost.body=this.postMod.body
    this.upPost.linko=this.postMod.linko
    this.upPost.fotografia=this.postMod.fotografia
  }

  annulla(){ 
    this.upPost.title=this.postMod.title
    this.upPost.body=this.postMod.body
    this.upPost.linko=this.postMod.linko
    this.upPost.fotografia=this.postMod.fotografia
  }

  
  constructor(private post:ServiceMainService, private homeAuth:AuthService, private forms:FormBuilder) { }
  
  eliminaPost(id:number){
    this.post.removePost(id).subscribe((res:IPosts)=>{ console.log(res);
     this.visualizzaPosts(); alert("Post eliminato correttamente"); this.opzPost=false})
  }

 
  home:IPosts[]=[]
  visualizzaPosts(){

    this.post.getPosts().subscribe(res=>{
      // res = res.map(p=>{ 
      //   let div = document.createElement('div')
      //   div.innerHTML=p.linko
      //   let p2 = Object.assign({}, p)
      //   p2.linko=div
      //   console.log(p2);
        
      //   console.log(typeof div);
        
      //   return p2
      // })
      this.home=res.reverse()
    
    })
  }

  
  

  ngOnInit(): void {
    this.visualizzaPosts()

    this.homeAuth.loginObs.subscribe((res)=>{
      this.user = res;})

      
  }

  

  updatePostino(postMod:IPosts, id:number){
    this.post.updatePost(postMod, id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); alert("post aggiornato correttamente"); this.modifica=false
    })
  }

}