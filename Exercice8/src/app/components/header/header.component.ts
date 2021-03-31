import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean
  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated
  }

  ngOnInit(): void {
  }

}
