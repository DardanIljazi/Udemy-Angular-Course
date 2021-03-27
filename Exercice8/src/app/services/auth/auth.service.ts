import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false
  // isAuthenticated = true

  constructor(private router: Router) { }

  signOn(): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.isAuthenticated = true
        console.log(this.isAuthenticated)
        res("Connected")
      }, 450)
    });
  }

  signOut(): void {
    this.isAuthenticated = false
    this.router.navigate(["auth"])
  }
}
