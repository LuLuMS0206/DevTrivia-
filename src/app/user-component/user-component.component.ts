import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent {
  username: string = '';  
  errorMessage: string = ''; 

  constructor(private router: Router) {}

  validateUsername() {
    if (this.username.trim() === '') {
      this.errorMessage = 'Por favor, ingrese un nombre de usuario.';
    } else if (this.username.length < 4) {
      this.errorMessage = 'El usuario debe tener al menos 4 caracteres.';
    } else {
      this.errorMessage = ''; 
    }
  }

  onSubmit() {
    this.validateUsername(); 

    if (this.errorMessage === '') {
      localStorage.setItem('username', this.username);
      this.router.navigate(['/tests']);
    }
  }
}
