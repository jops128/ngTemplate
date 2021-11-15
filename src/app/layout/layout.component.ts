import { Component, HostListener, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        console.log('window.innerWidth: ', window.innerWidth);
    }

}
