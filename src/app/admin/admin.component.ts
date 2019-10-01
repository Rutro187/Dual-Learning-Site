import { Component, OnInit, Inject } from '@angular/core';
import { AuthGenericService } from '../services/auth-generic.service';
// import {User} from '../Interfaces/users';
import {MatTableDataSource} from '@angular/material/table';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Users} from '../services/auth-generic.service';
import { Observable} from 'rxjs'



export interface Permission {
    viewValue: string;
}


@Component({
 selector: 'app-admin',
 templateUrl: './admin.component.html',
 styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 displayedColumns = ['displayname', 'email', 'permission', 'editperm' ];
 userCollection: AngularFirestoreCollection<Users>;

 constructor(private afs: AngularFirestore, private authGenserv: AuthGenericService) {

}

// users: User[] = [
//  {displayname: 'Kile Dude', email: 'kile@kile.com', permission: 'Admin'},
//  {displayname: 'Ben Guy', email: 'Ben@kile.com', permission: 'User'},
//  {displayname: 'Carlos Man', email: 'Carlos@kile.com', permission: 'Teacher'},
// ];

permissions: Permission[] = [
    {viewValue: 'user'},
    {viewValue: 'teacher'},
    {viewValue: 'admin'}
  ];

dataSource = new MatTableDataSource();

// getAllUsers() {
//     const userCollection = this.afs.collection('Users');
//     console.log(userCollection.snapshotChanges());
//   }

changePermission() {

}

applyFilter(filterValue: string) {
 this.dataSource.filter = filterValue.trim().toLowerCase();
}





ngOnInit() {this.getAllUsers();}
allUsers;
getAllUsers = ()=>
this.authGenserv.getAllUsers()
.subscribe(res => this.allUsers = res);

}
