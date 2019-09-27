import { Component, OnInit, Inject } from '@angular/core';
import { AuthGenericService } from '../services/auth-generic.service';
import {User} from '../Interfaces/users';
import {MatTableDataSource} from '@angular/material/table';
@Component({
 selector: 'app-admin',
 templateUrl: './admin.component.html',
 styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 displayedColumns = ['displayname', 'email', 'permission', ]
 constructor() {
}
users: User[] = [
 {displayname: 'Kile Dude', email: 'kile@kile.com', permission: 'Admin'},
 {displayname: 'Ben Guy', email: 'Ben@kile.com', permission: 'User'},
 {displayname: 'Carlos Man', email: 'Carlos@kile.com', permission: 'Teacher'},
];
dataSource = new MatTableDataSource(this.users);
applyFilter(filterValue: string) {
 this.dataSource.filter = filterValue.trim().toLowerCase();
}
ngOnInit() {
}
}