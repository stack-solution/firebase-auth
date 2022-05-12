import { Injectable } from "@angular/core";
import { AbstractAuthenticationRepository } from "../repositories/abstract.authentication.data.repository";
import { AuthenticationRepository } from "../repositories/authentication.repository";


@Injectable({
    providedIn: 'root'
})
export class SignOutUseCase{
    constructor(private readonly repository: AbstractAuthenticationRepository){}
    async execute(){
        return this.repository.signOut();
    }
}