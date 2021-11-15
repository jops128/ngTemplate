import { Component, OnInit } from '@angular/core';
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
        this.isExpanded = !this.isExpanded;

        const sidenav = document.getElementById('sidenav-bar') as HTMLElement;
        const sidenavWrapper = document.getElementById('sidenav-wrapper') as HTMLElement;
        const mainWrapper = document.getElementById('main-wrapper') as HTMLElement;
        mainWrapper.style.width = this.isExpanded ? '' : 'calc(100% - 4.375rem)';

        if (!this.isExpanded) {
            sidenavWrapper.classList.add('collapsed')
            sidenavWrapper.classList.remove('extended')
            mainWrapper.classList.add('collapsed')
            mainWrapper.classList.remove('extended')
            sidenav.classList.add('collapsed')
            sidenav.classList.remove('extended')
            this.visibleTitle = false;
        } else {
            sidenavWrapper.classList.add('extended')
            sidenavWrapper.classList.remove('collapsed')
            mainWrapper.classList.add('extended')
            mainWrapper.classList.remove('collapsed')
            sidenav.classList.add('extended')
            sidenav.classList.remove('collapsed')
            this.visibleTitle = true
        }
    }


    private loadJs() {
        const menus = Array.from(document.getElementsByClassName('sidenav-dropdown-menu'));
        const items = Array.from(document.getElementsByClassName('sidenav-item'));
        const childItems = Array.from(document.getElementsByClassName('child-list-item'));

        for(let i of items) {
            i.addEventListener('click',() => {
                for(let i of menus) {
                    if(i.classList.contains('open')) {
                        i.classList.remove('open');
                    }
                }
            })
        }

        for(let i of childItems) {
            i.addEventListener('click',() => {
                setTimeout(() => {
                    i.parentElement.parentElement.classList.add('open')
                });
            })
        }
        
        for(let i of menus) {
            i.addEventListener('click',() => {
                if(i.classList.contains('open')) {
                    i.classList.remove('open');
                } else {
                    for(let i of menus) {
                        if(i.classList.contains('open')) {
                            i.classList.remove('open');
                        }
                    }
                    i.classList.add('open');
                }
            })
        }
    }

}
