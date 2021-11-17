import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout-sidenav',
    templateUrl: './layout-sidenav.component.html',
    styleUrls: ['./layout-sidenav.component.scss']
})
export class LayoutSidenavComponent implements OnInit {

    isExpanded = true;
    visibleTitle: boolean = true;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.loadJs();
    }

    isActive(route: string) {
        return this.router.isActive(route, true);
    }

    isMenuOpen(route: string) {
        return this.router.url.includes(route)
    }

    toggleNav() {
        const sidenavWrapper = document.getElementById('sidenav-wrapper') as HTMLElement;
        const sidenav = document.getElementById('sidenav-bar') as HTMLElement;
        const overlay = document.getElementById('overlay');

        if (window.innerWidth <= 768) {
            sidenavWrapper.classList.remove('mobile-expanded');
            sidenav.classList.remove('collapsed');
            overlay.classList.remove('active');
            return;
        } else {
            sidenavWrapper.classList.remove('mobile-expanded');
        }

        this.isExpanded = !this.isExpanded;

        const mainWrapper = document.getElementById('main-wrapper') as HTMLElement;

        if (!this.isExpanded) {
            sidenavWrapper.classList.add('collapsed');
            sidenavWrapper.classList.remove('expanded');
            mainWrapper.classList.add('collapsed');
            mainWrapper.classList.remove('expanded');
            sidenav.classList.add('collapsed');
            sidenav.classList.remove('expanded');
            this.visibleTitle = false;
        } else {
            sidenavWrapper.classList.add('expanded');
            sidenavWrapper.classList.remove('collapsed');
            mainWrapper.classList.add('expanded');
            mainWrapper.classList.remove('collapsed');
            sidenav.classList.add('expanded');
            sidenav.classList.remove('collapsed');
            this.visibleTitle = true;
        }
    }

    @HostListener('window:resize', ['$event'])
    private onResize(event) {
        const sidenavWrapper = document.getElementById('sidenav-wrapper') as HTMLElement;
        const sidenav = document.getElementById('sidenav-bar') as HTMLElement;
        const mainWrapper = document.getElementById('main-wrapper') as HTMLElement;
        const overlay = document.getElementById('overlay');
        
        if (window.innerWidth <= 767) {
            sidenav.classList.add('mobile');
            sidenav.classList.remove('collapsed');
            sidenavWrapper.classList.remove('collapsed');
            mainWrapper.classList.remove('collapsed');
        } else {
            if(this.isExpanded) {
                sidenav.classList.add('expanded');
                sidenavWrapper.classList.add('expanded');
                mainWrapper.classList.add('expanded');
            } else {
                sidenav.classList.add('collapsed');
                sidenavWrapper.classList.add('collapsed');
                mainWrapper.classList.add('collapsed');
            }
            sidenavWrapper.classList.remove('mobile-expanded');
            overlay.classList.remove('active');
            sidenav.classList.remove('mobile');
        }
    }


    private loadJs() {
        const sidenav = document.getElementById('sidenav-bar') as HTMLElement;
        const menus = Array.from(document.getElementsByClassName('sidenav-dropdown-menu'));
        const items = Array.from(document.getElementsByClassName('sidenav-item'));
        const childItems = Array.from(document.getElementsByClassName('child-list-item'));

        if (window.innerWidth <= 767) {
            sidenav.classList.add('mobile')
        } else {
            sidenav.classList.remove('mobile')
        }

        for (let i of items) {
            i.addEventListener('click', () => {
                for (let i of menus) {
                    if (i.classList.contains('open')) {
                        i.classList.remove('open');
                    }
                }
            })
        }

        for (let i of childItems) {
            i.addEventListener('click', () => {
                setTimeout(() => {
                    i.parentElement.parentElement.classList.add('open')
                });
            })
        }

        for (let i of menus) {
            i.addEventListener('click', () => {
                if (i.classList.contains('open')) {
                    i.classList.remove('open');
                } else {
                    for (let i of menus) {
                        if (i.classList.contains('open')) {
                            i.classList.remove('open');
                        }
                    }
                    i.classList.add('open');
                }
            })
        }
    }

}
