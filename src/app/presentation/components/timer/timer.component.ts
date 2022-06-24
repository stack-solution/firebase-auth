import { Component, OnInit } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }
  pomodoro: number = 25;
  seconds?: number;
  shortBreak: number = 5;
  longBreak: number = 15;

  updateCountdown(){
    
  }

  ngOnInit(): void {
  }

}