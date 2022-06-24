import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { start } from "repl";
import { TimeStateModel } from "./pomodoro.model";


@State<TimeStateModel>({
    name: "time",
    defaults: {
        start: 25,
    }
})
@Injectable()
export class TimeState{
    
}