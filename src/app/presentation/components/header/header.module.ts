import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        BrowserModule,
        CommonModule,
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderModule { }
