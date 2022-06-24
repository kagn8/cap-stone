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
  form!:FormGroup;

  opzPost:boolean=false;
  modifica:boolean=false;

  opzioniPost(post:any){
    
    this.postMod=post
    this.opzPost=!this.opzPost
  }
  updatePost(){}


  modificaPost(){
    this.modifica=!this.modifica
    this.opzPost=!this.opzPost
  }

  annulla(){}

  
  constructor(private post:ServiceMainService, private homeAuth:AuthService, private forms:FormBuilder) { }
  
  eliminaPost(id:number){
    this.post.removePost(id).subscribe((res:IPosts)=>{ console.log(res);
     this.visualizzaPosts(); alert("Post eliminato correttamente"); this.opzPost=false})
  }
  home:IPosts[]=[]
  visualizzaPosts(){
    this.post.getPosts().subscribe(res=>{this.home=res.reverse()})
  }
  ngOnInit(): void {
    this.visualizzaPosts()

    this.homeAuth.loginObs.subscribe((res)=>{
      this.user = res;})

      this.form = this.forms.group({
        title:this.forms.control(null, [Validators.required]),
        body:this.forms.control(null, [Validators.required]),
        fotografia:this.forms.control(null, [Validators.required]),
        linko:this.forms.control(null, [Validators.required])
      })
  }
}