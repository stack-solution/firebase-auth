import { Observable } from 'rxjs';
import { TimerStartAction, TimerStopAction } from './../../../state-management/pomodoro/pomodoro.actions';
import { Component, OnInit } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { PomodoroStateSelectors } from 'src/app/state-management/pomodoro/pomodoro.selectors';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(private store: Store) { }
  startTime: number = 25;
  time = this.startTime * 60;
  minutes?: number;
  seconds?: any = "00";
  started: boolean = true;


  @Select(PomodoroStateSelectors.GET_TIMER_STATE) hasStarted$?: Observable<boolean>;

  startCountdown1(){
    setInterval(()=>{
      this.minutes = Math.floor(this.time/60);
      this.seconds = this.time % 60;
      this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
      this.time--;
    }, 1000)
  }

  startCountdown(){
    this.store.dispatch(new TimerStartAction(this.startTime))
  }

  stopCountdown(){
    this.store.dispatch(new TimerStopAction())
  }

  ngOnInit(): void {
  }

}