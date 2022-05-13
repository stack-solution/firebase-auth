import { Component, Injectable } from '@angular/core';
import { AbstractAuthenticationDataSource } from './abstract.authentication.data.source';
import { UserEntity } from "src/app/entities/user.entity";
import { ResponseEntity } from 'src/app/entities/response.entities';

@Injectable()
export class MockAuthenticationDataSource extends AbstractAuthenticationDataSource{
    async signIn(): Promise<ResponseEntity<UserEntity>>{
        console.log("Login Function triggered");
        return new ResponseEntity<UserEntity>({ 
            data: new UserEntity({
                name: "testName",
                email: "testEmail"
            }),
         });
    }
    async signOut(): Promise<ResponseEntity<void>>{
        return new ResponseEntity<void>({});
    }
}