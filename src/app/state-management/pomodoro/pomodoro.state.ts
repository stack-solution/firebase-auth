import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { StartTimerUseCase } from "src/app/features/pomodoro/use-cases/start.timer.use.case";
import { TimerStartAction, TimerStopAction, TimerResetAction } from "./pomodoro.actions";
import { TimeStateModel } from "./pomodoro.model";


@State<TimeStateModel>({
    name: "time",
    defaults: {
        started: false,
        seconds: "00",
    }
})
@Injectable()
export class TimeState{
    constructor(
        private startTimerUseCase: StartTimerUseCase,
    ){}
    @Action(TimerStartAction)
    async timerStart({patchState, getState}: StateContext<TimeStateModel>, {payload}: TimerStartAction){
        const state = getState();
        patchState({
            loading: true,
            startTime: payload,
            time: payload*60,
            started: true,
        });
        const ret = await this.startTimerUseCase.execute();
        patchState({
            loading: false,
        });

    }
}