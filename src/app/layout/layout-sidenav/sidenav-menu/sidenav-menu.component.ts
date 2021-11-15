import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidenav-menu',
    templateUrl: './sidenav-menu.component.html',
    styleUrls: ['../layout-sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidenavMenuComponent implements OnInit {
    @Input() isOpen: string;
    @Input() icon: string;
    @Input() title: string;

    @ViewChild('dropdown', {static: true}) dropdownElement: ElementRef;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    isMenuOpen(route: string) {
        return this.router.url.includes(route)
    }

    isMenuSelected() {
        return this.dropdownElement.nativeElement.classList.contains('open');
    }
}
