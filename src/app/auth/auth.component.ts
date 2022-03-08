import { User } from './../core/models/user.interface';
import { SweetalertService } from './../core/services/sweetalert.service';
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
    private authService: AuthService,
    private sweetAlert: SweetalertService
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
            this.authService.logged = true;
            localStorage.setItem(
              'credentials',
              JSON.stringify({
                username: this.loginForm.value.username,
                password: this.loginForm.value.password,
              })
            );
            const usuario: Array<User> = [
              {
                id: new Date().getTime(),
                name: 'Cristian Covarrubis',
                username: 'reffcp',
                email: 'ccovarrubias886@gmail.com',
                phone: '+523151009324',
              },
            ];
            this.sweetAlert.basicAlert(
              'Bienvenido',
              `Has iniciado sesión como ${usuario[0].name}`
            );
            this.loginForm.reset();
            this.router.navigate(['/inicio']);
          } else {
            // alert(respuesta[0].msg);
            this.sweetAlert.basicAlertError('Error', respuesta[0].msg);
          }
        }
      });
  }
}
