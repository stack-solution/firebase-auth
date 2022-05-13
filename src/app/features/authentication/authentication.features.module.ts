import { MockAuthenticationDataSource } from './data-sources/mock.authentication.data.source';
import { SignOutUseCase } from 'src/app/features/authentication/use-cases/sign.out.use.case';
import { AuthenticationRepository } from './repositories/authentication.repository';
import { SignInUseCase } from './use-cases/sign.in.use.case';
import { NgModule } from "@angular/core";
import { AbstractAuthenticationDataSource } from './data-sources/abstract.authentication.data.source';
import { AbstractAuthenticationRepository } from './repositories/abstract.authentication.data.repository';
import { FirebaseAuthenticationDataSource } from './data-sources/firebase.authentitaction.data.source';
import { environment } from 'src/environments/environment';


@NgModule({
    providers: [
        SignInUseCase,
        SignOutUseCase,
        AuthenticationRepository,
        FirebaseAuthenticationDataSource,
        MockAuthenticationDataSource,
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