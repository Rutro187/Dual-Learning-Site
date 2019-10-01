import { Injectable } from '@angular/core';
import { User } from './Interfaces/users';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private readonly _user = new BehaviorSubject<User[]>([]);
  readonly user$ = this._user.asObservable();
  constructor() { }
  readonly newUser$ = this.user$.pipe(
    map(users => this.users.filter(user =>
      user.isCompleted
    ))
  );
  get users(): User[] {
    return this._user.getValue();
  }
  private set users(val: User[]) {
    this._user.next(val);
  }
  addUser(title: string) {
    this.user = [
      ...this.user,
      {}
    ];
  }
}
