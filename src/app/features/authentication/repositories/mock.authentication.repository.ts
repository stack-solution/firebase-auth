import { ResponseEntity } from "src/app/entities/response.entities";
import { UserEntity } from "src/app/entities/user.entity";
import { AbstractAuthenticationDataSource } from "../data-sources/abstract.authentication.data.source";
import { AbstractAuthenticationRepository } from "./abstract.authentication.data.repository";


export class MockAuthenticationRepository extends AbstractAuthenticationRepository{
    constructor(private readonly dataSource: AbstractAuthenticationDataSource){super();}

    async signIn(): Promise<ResponseEntity<UserEntity>|Error>{
        try{
            return await this.dataSource.signIn();
        } catch(error){
            return new Error("Sign in Didnt Work");
        }
    }

    async signOut(): Promise<ResponseEntity<void>|Error>{
        try{
            return await this.dataSource.signOut();
        } catch(error){
            return new Error("Sign out Didnt Work");
        }
    }
}