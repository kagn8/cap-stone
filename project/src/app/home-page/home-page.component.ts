import { Component, OnInit } from '@angular/core';

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
  opzioniPost(post:any){
    
    this.postMod=post
    this.opzPost=!this.opzPost
  }
  modificaPost(){}

  
  constructor(private post:ServiceMainService, private homeAuth:AuthService, ) { }
  
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
  }
}