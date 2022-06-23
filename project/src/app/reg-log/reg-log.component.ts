import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

import { RegisterServiceService } from '../register-service.service';
import { IUser } from '../user';

@Component({
  selector: 'app-reg-log',
  templateUrl: './reg-log.component.html',
  styleUrls: ['./reg-log.component.scss']
})
export class RegLogComponent implements OnInit {

  constructor( private regServ:RegisterServiceService, private AuthService:AuthService, private router:Router) { }
  authUser:IUser = {
    email:'',
    password:'',
    name:'',
    surname:'',
    username:'',
    vipmember:false,
    creationdate:`${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
    
  }
  authLogin:any = {
    email: '',
    password: ''
  }
  accedi:boolean=true
  carico:boolean=false

  ngOnInit(): void {
  }
  registrati(){
    this.regServ.register(this.authUser).subscribe(res=>{console.log(res);})
  }

    seiLoggato(){
      if(localStorage.getItem("token") != null){this.accedi=false; this.carico=false; ;
      }
    }
    entra(){
      this.AuthService.login(this.authLogin).subscribe((res:any)=>{console.log(res); this.carico=true;
      
        this.AuthService.saveUser(res.accessToken); this.seiLoggato()
        if (!this.accedi) {
          ;
          
          this.router.navigate([''])
        }
  })
}
}


