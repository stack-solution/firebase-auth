import { Component, Injectable } from '@angular/core';
import { AbstractAuthenticationDataSource } from './abstract.authentication.data.source';
import { UserEntity } from "src/app/entities/user.entity";
import { ResponseEntity } from 'src/app/entities/response.entities';
import {
    getAuth,
    getIdToken,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class FirebaseAuthenticationDataSource extends AbstractAuthenticationDataSource{
    async signIn(): Promise<ResponseEntity<UserEntity>>{
        console.log("Login Function triggered");
        return new ResponseEntity<UserEntity>({ data: undefined });
    }
}