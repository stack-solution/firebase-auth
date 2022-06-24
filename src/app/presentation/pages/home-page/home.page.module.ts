import { NgModule } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { HomePageComponent } from './home.page.component';

@NgModule({
    imports: [],
    exports: [HomePageComponent],
    declarations: [HomePageComponent, HomeComponent],
    providers: [],
})
export class HomePageModule { }
