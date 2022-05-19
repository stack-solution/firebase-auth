import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './../../components/authentication/authentication.module';
import { NgModule } from '@angular/core';
import { AuthenticationPage } from './authentication.page';
import { AuthenticationComponent } from '../../components/authentication/authentication.component';

@NgModule({
    imports: [
        AuthenticationModule,
        RouterModule.forChild([
            {
              path: '',
              component: AuthenticationPage,
            },
          ]),
    ],
    exports: [AuthenticationPage],
    declarations: [AuthenticationPage],
    providers: [],
})
export class AuthenticationPageModule { }
