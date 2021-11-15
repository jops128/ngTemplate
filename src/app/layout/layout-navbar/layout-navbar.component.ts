import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styleUrls: ['./layout-navbar.component.scss']
})
export class LayoutNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
      const sidenav = document.getElementById('sidenav-wrapper');
      sidenav.classList.contains('mobile-expanded') ? sidenav.classList.remove('mobile-expanded') : sidenav.classList.add('mobile-expanded')
  }

}
