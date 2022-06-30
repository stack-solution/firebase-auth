import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractPomodoroRepository } from "../repositories/abstract.pomodoro.repository";
import { Select } from '@ngxs/store';
import { PomodoroStateSelectors } from 'src/app/state-management/pomodoro/pomodoro.selectors';

@Injectable()
export class PomodoroDataSource extends AbstractPomodoroRepository{
    async startTimer(): Promise<number>{
        console.log("uff")
        return 13;
    }
}