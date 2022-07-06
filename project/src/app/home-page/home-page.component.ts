import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthData, AuthService } from '../auth-service.service';
import { Icomment, IPosts } from '../posts';
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
    this.post.removePost(id).subscribe((res:IPosts)=>{ 
     this.visualizzaPosts(); alert("Post eliminato correttamente"); this.opzPost=false; location.reload()})
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
      
      this.home=res.reverse();
      for(let like of this.home){
        if(like.likedBy.includes(this.user!.user.id)){
          this.tiPiace.push(true);

        }else this.tiPiace.push(false)
      }
    
    })
  }

  tiPiace:boolean[]=[]
  // arr:number[]=[];
  like(post:IPosts, i:number){
    //  console.log(post.likedBy); 
    //  console.log(post.id); 
    //  console.log(post); 
    //  console.log(this.user?.user.id);
    //  console.log(post.likedBy.filter( n => n== this.user?.user.id! ));
    //  console.log(post.likedBy.find(n => n== this.user?.user.id!));
    //  if(post.likedBy.find(n => n== this.user?.user.id!)){   
    // }
    // }else{ 
    //   post.likedBy.push(this.user?.user.id!)
    //   this.post.updatePost(post, post.id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); console.log(post); 
    //  })
    if(this.user?.user.id != null && post.likedBy.find(n => n== this.user?.user.id!)){
      post.likedBy.splice(post.likedBy.indexOf(this.user?.user.id!),1)
      this.post.updatePost(post, post.id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); this.tiPiace[i]=!this.tiPiace[i]
      })
    }else{
      post.likedBy.push(this.user?.user.id!)
      this.post.updatePost(post, post.id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); this.tiPiace[i]=!this.tiPiace[i]})
    }
    // this.arr=[2,4,1,5]
    // this.arr.indexOf(this.user?.user.id!)
    // console.log(this.arr.indexOf(this.user?.user.id!));
    // this.arr.splice(this.arr.indexOf(this.user?.user.id!),1)
    // console.log(this.arr);

  }
  commento:Icomment=
  {
    autore:``,
    testo:""
  }
  addComment:boolean=false;
  commenta:boolean=false;
  comPost!:IPosts


  c!:any;
  comment(post:IPosts){
    this.addComment=!this.addComment
   this.commento={
    autore:`${this.user?.user.name} ${this.user?.user.surname}`,
    testo:""
   }
  //  console.log(this.commento.autore);
   
   
  

   
  }
  inviaCommento(post:IPosts){
    
    // console.log(post.comment);
    post.comment.push(this.commento)
    this.post.updatePost(post, post.id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); console.log(post);
    })
    // console.log(post.comment);
  
  }

  
  getCommenti(post:IPosts){
    this.commenta=!this.commenta
    this.c=post.comment
    // console.log(this.c);
    this.comPost=post
    this.opzPost=false
    
  }

  
  

  ngOnInit(): void {
    this.visualizzaPosts()

    this.homeAuth.loginObs.subscribe((res)=>{
      this.user = res;})

      
      this.post.ricercaObs.subscribe((req:any)=>{
        this.post.getPosts().subscribe(res=>{
          if(req){this.home=res.filter(t=>t.title.includes(req)).reverse()} 
          else {this.home=res.reverse()}
        })
       }
       )
      
      
  }

  

  updatePostino(postMod:IPosts, id:number){
    this.post.updatePost(postMod, id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); alert("post aggiornato correttamente"); this.modifica=false
    })
  }

  utenteId(id:number){
    // console.log(id);
    this.post.setUtenteDaVisualizzare(id)
    
  }

 

}