import { Injectable } from "@angular/core";
import { ResponseEntity } from "src/app/entities/response.entities";
import { UserEntity } from "src/app/entities/user.entity";

@Injectable({
    providedIn: 'root'
  })
export abstract class AbstractAuthenticationRepository{
    abstract signIn():  Promise<ResponseEntity<UserEntity> | Error>;
    abstract signOut():  Promise<ResponseEntity<void> | Error>;
}