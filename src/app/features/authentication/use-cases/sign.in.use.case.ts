import { Injectable } from "@angular/core";
import { AbstractAuthenticationRepository } from "../repositories/abstract.authentication.data.repository";

@Injectable({
    providedIn: 'root'
})
export class SignInUseCase{
    constructor(private readonly repository: AbstractAuthenticationRepository){}
    async execute(){
        return this.repository.signIn();
    }
}