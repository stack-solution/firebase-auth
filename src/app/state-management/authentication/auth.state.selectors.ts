import { Injectable } from '@angular/core';
import { AuthStateModel } from './auth.state.model';
import {Selector} from '@ngxs/store'
import { AuthState } from './auth.state'


export abstract class AuthStateSelectors{
    @Selector([AuthState])
    static USER_SIGNED_OUT({userSignedIn}: AuthStateModel){
        return userSignedIn;
    }
    @Selector([AuthState])
    static USER_INFORMATION({token}: AuthStateModel){
        return token;
    }
    @Selector([AuthState])
    static TOKEN({token}: AuthStateModel){
        return token;
    }
    @Selector([AuthState])
    static IS_LOADING({isLoading}: AuthStateModel){
        return isLoading;
    }
    @Selector([AuthState])
    static USER({user}: AuthStateModel){
        return user;
    }
}