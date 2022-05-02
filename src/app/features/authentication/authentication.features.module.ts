import { FirebaseAuthenticationDataSource } from './data-sources/firebase.authentitaction.data.source';
import { AuthenticationRepository } from './repositories/authentication.repository';
import { SignInUseCase } from './use-cases/sign.in.use.case';
import { NgModule } from "@angular/core";
import { AbstractAuthenticationRepository } from './repositories/abstract.authentication.data.repository';
import { AbstractAuthenticationDataSource } from './data-sources/abstract.authentication.data.source';
import { environment } from 'src/environments/environment';


@NgModule({
    providers: [
        SignInUseCase,
        {
            provide: AbstractAuthenticationRepository,
            deps: [AbstractAuthenticationDataSource],
            useFactory: (ds: AbstractAuthenticationDataSource) => {
            if (environment.baseUrl) {
                return new AuthenticationRepository(ds);
            }
            return new AuthenticationRepository(ds);
            }
        },
        {
            provide: AbstractAuthenticationDataSource,
            useFactory: () => {
              if (environment.firebase) {
                return new FirebaseAuthenticationDataSource();
              }
              return new FirebaseAuthenticationDataSource();
            },
        },
    ],
})
export class AuthenticationFeatureModule{}