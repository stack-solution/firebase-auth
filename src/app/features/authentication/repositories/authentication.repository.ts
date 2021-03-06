import { UserEntity } from "src/app/entities/user.entity";
import { AbstractAuthenticationDataSource } from "../data-sources/abstract.authentication.data.source";
import { AbstractAuthenticationRepository } from "./abstract.authentication.data.repository";
import { Injectable } from "@angular/core";
import { ResponseEntity } from "src/app/entities/response.entities";
import { FirebaseAuthenticationDataSource } from "../data-sources/firebase.authentitaction.data.source";

@Injectable()
export class AuthenticationRepository extends AbstractAuthenticationRepository{
    constructor(private readonly dataSource: AbstractAuthenticationDataSource){super();}
    async signIn(): Promise<ResponseEntity<UserEntity> | Error>{
        try{
            return await this.dataSource.signIn();
        } catch(error){
            return new Error("Sign in didn't work out " + error);
        }
    }
    async signOut(): Promise<ResponseEntity<void> | Error>{
        try{
            return await this.dataSource.signOut();
        } catch(error){
            return new Error("Sign Out didnt work " + error);
        }
    }
}