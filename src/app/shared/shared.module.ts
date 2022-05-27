import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ButtonComponent,
        BreadCrumbComponent
    ],
    imports: [
        CommonModule,

    ],
    exports: [
        ButtonComponent,
        BreadCrumbComponent
    ],
})
export class SharedModule { }
