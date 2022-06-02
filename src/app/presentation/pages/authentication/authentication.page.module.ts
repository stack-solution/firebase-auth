import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './../../components/authentication/authentication.module';
import { NgModule } from '@angular/core';
import { AuthenticationPage } from './authentication.page';
import { AuthenticationComponent } from '../../components/authentication/authentication.component';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
    imports: [
        AuthenticationModule,
        HeaderModule,
    ],
    exports: [HeaderModule],
    declarations: [AuthenticationPage],
    providers: [],
})
export class AuthenticationPageModule { }
