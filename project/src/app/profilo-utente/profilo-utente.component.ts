import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthData, AuthService } from '../auth-service.service';
import { Icomment, IPosts } from '../posts';
import { ServiceMainService } from '../service-main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profilo-utente',
  templateUrl: './profilo-utente.component.html',
  styleUrls: ['./profilo-utente.component.scss']
})
export class ProfiloUtenteComponent implements OnInit, OnChanges {

  constructor(private profiloPost:ServiceMainService, private profiloAuth:AuthService,) { }

  postMod!:IPosts

  opzPost:boolean=false;
  modifica:boolean=false;

  opzioniPost(post:any){
    
    this.postMod=post
    this.opzPost=!this.opzPost
  }

  tiPiace:boolean[]=[]
  // arr:number[]=[];
  like(post:IPosts, i:number){
    
    if(post.likedBy.find(n => n== this.user?.user.id!)){
      post.likedBy.splice(post.likedBy.indexOf(this.user?.user.id!),1)
      this.profiloPost.updatePost(post, post.id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); this.tiPiace[i]=!this.tiPiace[i]
      })
    }else{
      post.likedBy.push(this.user?.user.id!)
      this.profiloPost.updatePost(post, post.id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); this.tiPiace[i]=!this.tiPiace[i]})
    }
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
    this.profiloPost.updatePost(post, post.id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); this.commento={
      autore:`${this.user?.user.name} ${this.user?.user.surname}`,
      testo:""
     } ;
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

  
  

  emailString:string|undefined 

  ngOnInit(): void {
    this.profiloAuth.loginObs.subscribe((res)=>{
      this.user = res;})

      this.visualizzaPosts()
  }
  user!:AuthData|null;
  home:IPosts[]=[]
  visualizzaPosts(){
    this.profiloPost.getPosts().subscribe(res=>{
      
      this.home=res.filter(p => p.authorNumero==this.profiloPost.utenteDaVisualizzare).reverse();
      // console.log(this.home);
      
      for(let like of this.home){
        if(like.likedBy.includes(this.user!.user.id)){
          this.tiPiace.push(true);

        }else this.tiPiace.push(false)
      }
    })
    this.emailString = `mailto:${this.user?.user?.email}`

    console.log(this.home);
    
  }
  
  ngOnChanges():void{
    console.log(this.home);
    console.log("ora");

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

  
 
  
  eliminaPost(id:number){
    this.profiloPost.removePost(id).subscribe((res:IPosts)=>{ 
     this.visualizzaPosts(); alert("Post eliminato correttamente"); this.opzPost=false; location.reload()})
  }


  updatePostino(postMod:IPosts, id:number){
    this.profiloPost.updatePost(postMod, id).subscribe((res:IPosts)=>{ this.visualizzaPosts(); alert("post aggiornato correttamente"); this.modifica=false
    })
  }


}
