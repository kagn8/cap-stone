import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
opzioni:boolean = false

mostraOpzioni(){
  // this.opzioni=!this.opzioni
  let opzioni = document.querySelector('.opzioni')
  opzioni?.classList.toggle('canvas')
}
  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  esci(){
    this.auth.logout()
    this.route.navigate(['/reg-log'])
    this.opzioni=false
  }

}
