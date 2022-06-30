import { PomodoroDataSource } from './../data-sources/pomodoro.data.source';
import { Injectable } from "@angular/core";
import { TimeStateModel } from "src/app/state-management/pomodoro/pomodoro.model";
import { AbstractPomodoroDataSource } from "../data-sources/abstract.pomodoro.data.source";
import { AbstractPomodoroRepository } from "./abstract.pomodoro.repository";

@Injectable()
export class PomodoroRepository extends AbstractPomodoroRepository{
    constructor(private dataSource: AbstractPomodoroDataSource){super();};
    async startTimer(): Promise<number | Error>{
        try{
            return this.dataSource.startTimer();
        } catch(err){
            return new Error("Timer didnt start" + err);
        }
    }
}