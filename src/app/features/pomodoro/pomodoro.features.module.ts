import { NgModule } from '@angular/core';
import { AbstractAuthenticationDataSource } from '../authentication/data-sources/abstract.authentication.data.source';
import { AbstractPomodoroDataSource } from './data-sources/abstract.pomodoro.data.source';
import { PomodoroDataSource } from './data-sources/pomodoro.data.source';
import { AbstractPomodoroRepository } from './repositories/abstract.pomodoro.repository';
import { PomodoroRepository } from './repositories/pomodoro.repository';

import { StartTimerUseCase } from './use-cases/start.timer.use.case';

@NgModule({
    imports: [

    ],
    exports: [

    ],
    declarations: [
        
    ],
    providers: [
        StartTimerUseCase,
        PomodoroDataSource,
        PomodoroRepository,
        {
            provide: AbstractPomodoroRepository,
            useClass: PomodoroRepository,
        },
        {
            provide: AbstractPomodoroDataSource,
            useClass: PomodoroDataSource,
        }
    ],
})
export class PomodoroFeatureModule { }
