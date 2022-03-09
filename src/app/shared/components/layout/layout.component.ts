import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menuElements = [
    {
      icon: 'house',
      text: 'Home',
      link: '/',
    },
    {
      icon: 'set_meal',
      text: 'Ingredientes Populares',
      link: '/ingredientes-populares',
    },
    {
      icon: 'ramen_dining',
      text: 'Platillos',
      link: '/platillos',
    },
    {
      icon: 'account_circle',
      text: 'Perfil',
      link: '/mi-perfil',
    },
  ];

  openDraw: boolean = true;
  isSmallMobileDevice: MediaQueryList = window.matchMedia('(min-width: 769px)');
  constructor() {}

  ngOnInit(): void {
    if (this.isSmallMobileDevice.matches) {
      this.openDraw = true;
    } else {
      this.openDraw = false;
    }
  }

  openMenu() {
    if (this.openDraw) {
      this.openDraw = false;
    } else {
      this.openDraw = true;
    }
  }
}
