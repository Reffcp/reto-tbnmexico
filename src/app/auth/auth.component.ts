import { ResponseApiLogin } from './../core/models/response.interface';
import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  recordarSesion = false;

  constructor(
    private form: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getLocalStorageCredentials();
  }

  //metodo que inicializa el formulario
  initForm() {
    this.loginForm = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      saveSession: [false],
    });
  }

  //metodo que obtiene las credenciales desde el localstorage
  getLocalStorageCredentials() {
    const credentials = localStorage.getItem('credentials');
    if (credentials !== null) {
      this.loginForm.patchValue({
        username: JSON.parse(credentials).username,
        password: JSON.parse(credentials).password,
        saveSession: true,
      });
    }
  }

  // metodo para realizar el logueo
  login() {
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((respuesta: ResponseApiLogin[]) => {
        if (respuesta.length > 0) {
          if (respuesta[0].success) {
            this.loginForm.reset();
            this.router.navigate(['/inicio']);
          } else {
            alert(respuesta[0].msg);
          }
        }
      });
  }
}
