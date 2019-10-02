import { Component, OnInit, Inject } from '@angular/core';
import { AuthGenericService } from '../../shared/services/auth-generic.service';
import {MatTableDataSource} from '@angular/material/table';




export interface Permission {
    viewValue: string;
}


@Component({
 selector: 'app-admin',
 templateUrl: './quiz-admin.component.html',
 styleUrls: ['./quiz-admin.component.scss']
})
export class QuizAdminComponent implements OnInit {

 constructor( private authGenServ: AuthGenericService) {

}
 displayedColumns: string[]= ['displayname', 'email', 'permission', 'editperm' ];
//  userCollection: AngularFirestoreCollection<Users>;



permissions: Permission[] = [
    {viewValue: 'user'},
    {viewValue: 'teacher'},
    {viewValue: 'admin'}
  ];

  
allUsers;
dataSource = new MatTableDataSource




//pulling the data from  the row attribute from material table
changePermission(data, permission){
  console.log(data,permission)
  this.authGenServ.updateUserPerm(data, permission)
}



applyFilter(filterValue: string) {
 this.dataSource.filter = filterValue.trim().toLowerCase();
}

getAllUsers = () =>
this.authGenServ
.getAllUsers()
.subscribe(res => {(this.allUsers = res); console.log(res)})



ngOnInit() {this.getAllUsers()}



}

