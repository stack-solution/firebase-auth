import { AuthenticationRepository } from './../repositories/authentication.repository';
import { UserEntity } from './../../../entities/user.entity';
import { UseCase } from './../../../entities/use.case';
import { Injectable } from "@angular/core";
import { AbstractAuthenticationRepository } from "../repositories/abstract.authentication.data.repository";

@Injectable({
    providedIn: 'root'
})
export class SignInUseCase{
    constructor(private readonly repository: AuthenticationRepository){}
    async execute(){
        return this.repository.signIn();
    }
}