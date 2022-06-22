import { Component, OnInit } from '@angular/core';
import { IPosts } from '../posts';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private post:ServiceMainService ) { }

  home:IPosts[]=[]
  visualizzaPosts(){
    this.post.getPosts().subscribe(res=>{this.home=res.reverse()})
  }
  ngOnInit(): void {
    this.visualizzaPosts()
  }

}
