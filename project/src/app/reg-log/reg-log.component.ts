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
    this.regServ.register(this.authUser).subscribe(res=>{console.log(res);})}

    entra(){
      this.AuthService.login(this.authLogin).subscribe((res:any)=>{console.log(res); this.carico=true; console.log(this.accedi);
      
        this.AuthService.saveUser(res.accessToken); this.seiLoggato()
        if (!this.accedi) {
          console.log(this.accedi);
          
          this.router.navigate([''])
        }
      })
    }
    seiLoggato(){
        if(localStorage.getItem("token") != null){this.accedi=false; this.carico=false; console.log(this.accedi);
        }
    }
}


