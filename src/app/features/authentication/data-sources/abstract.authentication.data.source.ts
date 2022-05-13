import { UserEntity } from "src/app/entities/user.entity";
import { Injectable } from "@angular/core";
import { ResponseEntity } from "src/app/entities/response.entities";

@Injectable()
export abstract class AbstractAuthenticationDataSource{
    abstract signIn():  Promise<ResponseEntity<UserEntity>>;
    abstract signOut():  Promise<ResponseEntity<void>>;
}