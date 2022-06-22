import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData } from './auth-service.service';
import { IUser } from './user';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }
  ApiUrlUser:string = 'http://localhost:4201/users'
  ApiUrlGetUser:string = 'http://localhost:4201/'


  register(data:IUser) {
    return this.http.post<AuthData>(this.ApiUrlUser+"register", data).pipe(
      tap((data)=>{
        console.log("Signup", data);
        localStorage.setItem("user", JSON.stringify(data));
        this.loginSub.next(data);
      })
    )
  }

  private loginSub = new BehaviorSubject<null|AuthData>(null);
  
  loginObs = this.loginSub.asObservable();

}
