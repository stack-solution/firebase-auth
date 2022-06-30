export class TimerStartAction{
    constructor(public payload: number){}
    static readonly type = '[TIME]TIMER START';
}

export class TimerStopAction{
    static readonly type = '[TIME]TIMER STOP';
}

export class TimerResetAction{
    constructor(public payload: number){}
    static readonly type = '[TIME]TIMER RESET';
}