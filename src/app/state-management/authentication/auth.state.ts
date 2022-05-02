import { SignInUseCase } from './../../features/authentication/use-cases/sign.in.use.case';
import { AuthStateModel } from './auth.state.model';
import { SignInAction, SignOut } from './auth.state.actions';
import { Inject, Injectable } from "@angular/core";
import {Action, State, StateContext} from '@ngxs/store';

@State<AuthStateModel>({
    name: 'auth',
})
@Injectable()
export class AuthState {
    constructor(
        private readonly signInUseCase: SignInUseCase,
    ){}

    @Action(SignInAction)
    async signIn({patchState}: StateContext<AuthStateModel>){
        patchState({
            isLoading: true,
        });
        const ret = await this.signInUseCase.execute();
        if(ret instanceof Error){
            patchState({
                isLoading: false,
                error: ret,
            })
        }
        return;
    }
}