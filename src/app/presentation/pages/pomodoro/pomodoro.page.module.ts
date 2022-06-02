import { NgModule } from '@angular/core';

import { TimerModule } from '../../components/timer/timer.module';
import { PomodoroPage } from './pomodoro.page';

@NgModule({
    imports: [TimerModule],
    exports: [TimerModule],
    declarations: [PomodoroPage],
    providers: [],
})
export class PomodoroPageModule { }