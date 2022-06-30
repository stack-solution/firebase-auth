import { Select, Selector } from "@ngxs/store";
import { TimeStateModel } from "./pomodoro.model";
import { TimeState } from "./pomodoro.state";

export class PomodoroStateSelectors{
    constructor(){};

    @Selector([TimeState])
    static GET_TIMER_STATE({started}: TimeStateModel){
        return started;
    }
    @Selector([TimeState])
    static GET_MINUTES({startTime}: TimeStateModel){
        return startTime;
    }
    @Selector([TimeState])
    static GET_START_TIME({minutes}: TimeStateModel){
        return minutes;
    }
    @Selector([TimeState])
    static GET_TIME({time}: TimeStateModel){
        return time;
    }
    @Selector([TimeState])
    static GET_SECONDS({seconds}: TimeStateModel){
        return seconds;
    }

}