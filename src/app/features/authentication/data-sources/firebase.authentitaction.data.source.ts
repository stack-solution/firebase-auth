import { Component, Injectable } from '@angular/core';
import { AbstractAuthenticationDataSource } from './abstract.authentication.data.source';
import { UserEntity } from "src/app/entities/user.entity";
import { ResponseEntity } from 'src/app/entities/response.entities';
import {
  browserLocalPersistence,
    getAuth,
    getIdToken,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
  import { Router } from '@angular/router';


@Injectable()
export class FirebaseAuthenticationDataSource extends AbstractAuthenticationDataSource{
  constructor(private router: Router){super();}

  async signIn(): Promise<ResponseEntity<UserEntity>> {
    await signInWithPopup(getAuth(), new GoogleAuthProvider());
    const ret = getAuth().currentUser;
    if (ret) {
      await getAuth().currentUser?.getIdToken(true);
      return new ResponseEntity<UserEntity>({
        data: new UserEntity({
          name: ret.displayName ?? undefined,
          email: ret.email ?? undefined,
          phoneNumber: ret.phoneNumber ?? undefined,
          photoUrl: ret.photoURL ?? undefined,
          memberSince: new Date,
        }),
      });
    }
    return new ResponseEntity<UserEntity>({ data: undefined });
  }

  async signOut(): Promise<ResponseEntity<void>>{
    const currentUser = getAuth();
    if(currentUser){
        await signOut(getAuth());
    }
    return new ResponseEntity({});
  }
}