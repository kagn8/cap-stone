import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData, AuthService } from './auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route:Router, private appAuth:AuthService){}

  ngOnInit(): void {
    this.regCond()

    this.appAuth.loginObs.subscribe((res)=>{
      this.user = res;})
  }

  user!:AuthData|null;

  title = 'project';


  reg=true
  regCond(){
    console.log(this.route);
    
  }
}
