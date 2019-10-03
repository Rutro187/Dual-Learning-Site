import { Component, OnInit } from '@angular/core';
import { AuthGenericService } from 'src/app/shared/services/auth-generic.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  user$;

  constructor(private authGenericService: AuthGenericService, public userStore: UserStoreService) { }

  ngOnInit() {
    this.user$ = this.userStore.user$;
  }
}
