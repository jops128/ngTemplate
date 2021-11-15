import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LayoutComponent } from './layout.component';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { SidenavLinkComponent } from './layout-sidenav/sidenav-link/sidenav-link.component';
import { SidenavMenuComponent } from './layout-sidenav/sidenav-menu/sidenav-menu.component';


@NgModule({
  declarations: [
    LayoutNavbarComponent,
    LayoutComponent,
    LayoutSidenavComponent,
    LayoutFooterComponent,
    SidenavLinkComponent,
    SidenavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
