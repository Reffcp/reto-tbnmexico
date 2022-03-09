import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss'],
})
export class MiPerfilComponent implements OnInit {
  constructor(private router: Router) {}
  usuario: User = {
    email: 'ccovarrubias886@gmail.com',
    name: 'Cristian Refugio Covarrubias Patiño',
    phone: '+523151009324',
    username: 'reffcp',
  };

  ngOnInit(): void {}

  cerrarSesion(): void {
    this.router.navigate(['/login']);
  }
}
