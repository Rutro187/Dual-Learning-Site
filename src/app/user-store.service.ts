import { Injectable } from '@angular/core';
import { User } from './Interfaces/users';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private readonly _user = new BehaviorSubject<User>({});
  readonly user$ = this._user.asObservable();
  constructor() { }
  private get user(): User {
    return this._user.getValue();
  }
  private set user(val: User) {
    this._user.next(val);
  }
  updateUser(user: User) {
    this.user = {...user};
  }
}
