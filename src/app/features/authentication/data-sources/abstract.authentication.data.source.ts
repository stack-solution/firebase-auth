import { UserEntity } from "src/app/entities/user.entity";
import { Injectable } from "@angular/core";
import { ResponseEntity } from "src/app/entities/response.entities";

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractAuthenticationDataSource{
    abstract signIn():  Promise<ResponseEntity<UserEntity>>;

}