import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthData, AuthService } from 'src/app/auth-service.service';
import { ClassPosts } from 'src/app/class-posts';
import { ServiceMainService } from 'src/app/service-main.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  user!:AuthData|null
  constructor(private asideAuth:AuthService, private newPost: ServiceMainService, private forms:FormBuilder) { }

  modalNuovoPost:boolean=false
  modalNuovoPh:boolean=false
  modalNuovoLink:boolean=false
  nuovoOn(){
    this.modalNuovoPost=!this.modalNuovoPost
    this.modalNuovoPh=false
    this.modalNuovoLink=false
  }
  nuovoPh(){
    this.modalNuovoPost=false
    this.modalNuovoPh=!this.modalNuovoPh
    this.modalNuovoLink=false
  }
  nuovoLink(){
    this.modalNuovoPost=false
    this.modalNuovoPh=false
    this.modalNuovoLink=!this.modalNuovoLink
  }
  
  form!:FormGroup;
  ngOnInit(): void {
    this.asideAuth.loginObs.subscribe((res)=>{
      this.user = res;
      console.log(this.user);

      
    })
    this.form = this.forms.group({
      title:this.forms.control(null, [Validators.required]),
      body:this.forms.control(null, [Validators.required]),
      fotografia:this.forms.control(null, [Validators.required]),
      linko:this.forms.control(null, [Validators.required])
    })
  }

  caricamento:boolean=false;
  creaNuovo(){
    console.log(this.form);

    let nuovo = new ClassPosts(0, this.form.value.title, this.form.value.body, "", "", `${this.user?.user.name} ${this.user?.user.surname}`, this.user?.user.id)

    this.caricamento=true
    this.newPost.createNewPost(nuovo).subscribe((res: any)=>{console.log(res); this.caricamento=false;})
    // this.form = this.forms.group({
    //   title:[null, [Validators.required]],
    //   body:[null, [Validators.required]]
    this.form = this.forms.group({
      title:this.forms.control(null, [Validators.required]),
      body:this.forms.control(null, [Validators.required]),
      fotografia:this.forms.control(null, [Validators.required]),
      linko:this.forms.control(null, [Validators.required])
    })
  }
  foto!:string;
  creaNuovoPh(){
    console.log(this.form);
    this.foto=this.form.value.fotografia

    let nuovo = new ClassPosts(0, this.form.value.title, this.form.value.body, this.foto, "", `${this.user?.user.name} ${this.user?.user.surname}`, this.user?.user.id)

    this.caricamento=true
    this.newPost.createNewPost(nuovo).subscribe((res: any)=>{console.log(res); this.caricamento=false;})
    // this.form = this.forms.group({
    //   title:[null, [Validators.required]],
    //   body:[null, [Validators.required]]
    this.form = this.forms.group({
      title:this.forms.control(null, [Validators.required]),
      body:this.forms.control(null, [Validators.required]),
      fotografia:this.forms.control(null, [Validators.required]),
      linko:this.forms.control(null, [Validators.required])
    })
  }
  creaNuovoLink(){
    
     let giorgio = this.form.value.title;
     console.log(giorgio);
    let nuovo = new ClassPosts(0, this.form.value.title, this.form.value.body, "", this.form.value.linko, `${this.user?.user.name} ${this.user?.user.surname}`, this.user?.user.id)
    this.caricamento=true
    this.newPost.createNewPost(nuovo).subscribe((res: any)=>{console.log(res); this.caricamento=false;})
    // this.form = this.forms.group({
    //   title:[null, [Validators.required]],
    //   body:[null, [Validators.required]]
    this.form = this.forms.group({
      title:this.forms.control(null, [Validators.required]),
      body:this.forms.control(null, [Validators.required]),
      fotografia:this.forms.control(null, [Validators.required]),
      linko:this.forms.control(null, [Validators.required])
    })
  }

}
