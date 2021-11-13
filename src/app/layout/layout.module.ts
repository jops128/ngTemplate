import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LayoutComponent } from './layout.component';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';


@NgModule({
  declarations: [
    LayoutNavbarComponent,
    LayoutComponent,
    LayoutSidenavComponent,
    LayoutFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
