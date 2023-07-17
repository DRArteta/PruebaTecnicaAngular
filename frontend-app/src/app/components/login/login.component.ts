import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Alert } from '../../utils/alert.interface';
import { ALERTS } from '../../utils/const.interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  alerts: Alert[] = [];

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) {
    this.reset();
   }

  login() {
    if (this.loginForm && this.loginForm.valid) {
      this.authService.login(this.username, this.password).subscribe(success => {
        if (success) {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/posts']);
        } else {
          this.loginError = true;
        }
      });
    }
  }

  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}
}
