import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth/auth.service";
import {HelperService} from "../services/helper/helper.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  helperServiceFront: HelperService

  constructor(private router: Router, private authService: AuthService, private helperService: HelperService
  ) {
    this.helperServiceFront = helperService;
  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.authService.logout();
    }else{
      this.fetchUser();
    }

  }

  logout() {
    this.authService.logout();
  }


  fetchUser() {
    this.helperService.index("user-auth")
      .subscribe({
        next: (response: any) => {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response));
        },
        error: (error: any) => {
        },
      })
  }


}
