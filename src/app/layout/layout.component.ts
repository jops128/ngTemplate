import { Component, HostListener, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    ngOnInit(): void {
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        console.log('window.innerWidth: ', window.innerWidth);
    }

    public closeNav() {
        const sidenav = document.getElementById('sidenav-wrapper');
        const overlay = document.getElementById('overlay');
        sidenav.classList.remove('mobile-expanded');
        overlay.classList.remove('active');
    }

}
