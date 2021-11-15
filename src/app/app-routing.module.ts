import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'test', component: TestComponent },
            { path: 'list', children: [
                { path: 'tennis', component: TestComponent },
                { path: 'baseball', component: TestComponent },
            ] },
            { path: 'second', children: [
                { path: 'volleyball', component: TestComponent },
                { path: 'football', component: TestComponent },
            ] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
