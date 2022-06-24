import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimerComponent } from './timer.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
    ],
    exports: [TimerComponent],
    declarations: [TimerComponent],
    providers: [],
})
export class TimerModule { }