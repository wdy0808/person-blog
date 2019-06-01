import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideBarModule } from '../util/side-bar/module';

import { HomeComponent } from './home.component';

const routes: Routes = [
    {path: '', component: HomeComponent}
];

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SideBarModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
