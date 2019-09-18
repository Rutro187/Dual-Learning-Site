import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isAdmin = new BehaviorSubject<boolean>(false);
  isLoggedOut = new BehaviorSubject<boolean>(true);
  private loggedInId = new BehaviorSubject<Number>(0);
  logger = this.loggedInId.asObservable();
  constructor(private http: HttpClient) { }
  signup(loginData) {
    return this.http.post('/users/create', loginData)
  }

  login(loginData) {
    return this.http.post('/users/login', loginData)
  }
  deleteUser(email){
    return this.http.delete('/users/delete', email)
  }
  userLogin(){
    this.isLoggedOut.next(false);
    this.isLoggedIn.next(true);
  }
  userLogout(){
    this.isLoggedIn.next(false);
    this.isLoggedOut.next(true); 
  }
  userAdmin(){
    this.isAdmin.next(true);
  }
  userId(id){
    this.loggedInId.next(id);
  }
}
