import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




@NgModule({
    imports: [
        FormsModule,
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderModule { }
