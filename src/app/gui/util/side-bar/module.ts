import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SideBarComponent } from './side-bar.component';

@NgModule({
    declarations: [
        SideBarComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule
    ],
    exports: [
        SideBarComponent
    ]
})
export class SideBarModule { }
