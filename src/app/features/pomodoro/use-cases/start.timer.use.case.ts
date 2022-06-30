import { Injectable } from "@angular/core";
import { AbstractPomodoroRepository } from "../repositories/abstract.pomodoro.repository";
import { PomodoroRepository } from "../repositories/pomodoro.repository";

@Injectable()
export class StartTimerUseCase{
    constructor(private repository: AbstractPomodoroRepository){};
    async execute(){
        this.repository.startTimer();
    }
    ngOnInit(): void {};
}