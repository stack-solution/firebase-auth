import { environment } from 'src/environments/environment';
import { NgModule } from "@angular/core";
import { initializeApp } from "firebase/app";

@NgModule({})
export class FireBaseModule{
    constructor(){
        initializeApp(environment.firebase);
    }
}