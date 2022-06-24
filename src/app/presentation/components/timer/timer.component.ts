import { Component, OnInit } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }
  startTime: number = 25;
  time = this.startTime * 60;
  minutes?: number;
  seconds?: any = "00";
  started: boolean = true;
  interval?: any;

  startCountdown(){
    setInterval(()=>{
      this.minutes = Math.floor(this.time/60);
      this.seconds = this.time % 60;

      this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
      this.time--;
    }, 1000)
  }

  toggleTimer(){
    this.started != this.started;
  }

  stopCountdown(){
    clearInterval()
  }

  ngOnInit(): void {
  }

}