import { Component, OnInit, Inject } from '@angular/core';
import { AuthGenericService } from '../services/auth-generic.service';
// import {User} from '../Interfaces/users';
import {MatTableDataSource} from '@angular/material/table';
// import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Users} from '../services/auth-generic.service';




export interface Permission {
    viewValue: string;
}


@Component({
 selector: 'app-admin',
 templateUrl: './admin.component.html',
 styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

 constructor( private authGenServ: AuthGenericService) {

}
 displayedColumns = ['displayname', 'email', 'permission', 'editperm' ];
//  userCollection: AngularFirestoreCollection<Users>;



permissions: Permission[] = [
    {viewValue: 'user'},
    {viewValue: 'teacher'},
    {viewValue: 'admin'}
  ];

dataSource = new MatTableDataSource<Users>();
allUsers;


// changePermission = data =>
//   this.authGenserv.updateUserPerm(data)



// applyFilter(filterValue: string) {
//  this.dataSource.filter = filterValue.trim().toLowerCase();
// }

getAllUsers = () =>
this.authGenServ
.getAllUsers()
.subscribe(res => (this.allUsers = res))



ngOnInit() {this.getAllUsers(); }



}

