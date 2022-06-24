import { SignInUseCase } from './../../features/authentication/use-cases/sign.in.use.case';
import { AuthStateModel } from './auth.state.model';
import { SignInAction, SignOutAction } from './auth.state.actions';
import { Inject, Injectable } from "@angular/core";
import {Action, State, StateContext} from '@ngxs/store';
import { SignOutUseCase } from 'src/app/features/authentication/use-cases/sign.out.use.case';

@State<AuthStateModel>({
    name: 'auth',
})

@Injectable()
export class AuthState {
    constructor(
        private readonly signInUseCase: SignInUseCase,
        private readonly signOutUseCase: SignOutUseCase,
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
                userSignedIn: false,
            })
        }else {
            patchState({
                isLoading: false,
                user: ret.data,
                userSignedIn: true,
            })
        }
        return;
    }

    @Action(SignOutAction)
    async signOut({patchState}: StateContext<AuthStateModel>){
        patchState({
            isLoading: true,
        });
        const ret = await this.signOutUseCase.execute();
        if(ret instanceof Error){
            patchState({
                error: ret,
                userSignedIn: true,
            })
        }else{
            patchState({
                isLoading: false,
                user: undefined,
                userSignedIn: false,
            })
        }
        return;
    }
}