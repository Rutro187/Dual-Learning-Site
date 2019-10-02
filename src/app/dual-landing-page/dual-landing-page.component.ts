import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthGenericService } from '../shared/services/auth-generic.service';

@Component({
  selector: 'dual-landing-page',
  templateUrl: './dual-landing-page.component.html',
  styleUrls: ['./dual-landing-page.component.scss']
})
export class DualLandingPageComponent implements OnInit {
  email: string = "";
  password: string = "";
  userId;
  error;
  userMessage = "enter your password"
  constructor(private authService: AuthGenericService, private router: Router) { }


  ngOnInit() {
  }
}
