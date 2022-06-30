import { Injectable } from '@angular/core';
import { TimeStateModel } from 'src/app/state-management/pomodoro/pomodoro.model';

@Injectable()
export abstract class AbstractPomodoroDataSource{
    abstract startTimer(): Promise<number>;
}