import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidenav-link',
    templateUrl: './sidenav-link.component.html',
    styleUrls: ['../layout-sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidenavLinkComponent implements OnInit {

    @Input() icon: string;
    @Input() link: string;
    

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    public isActive(route: string) {
        return this.router.isActive(route, true);
    }

}
