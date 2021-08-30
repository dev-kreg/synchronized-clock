import { EventEmitter, OnInit, Output, SimpleChanges, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'clock-component',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnChanges{

  secondsDegrees = 0;
  minsDegrees = 0;
  hourDegrees = 0;

  secNow = 0;
  minNow = 0;
  hourNow = 0;

  @Input() time: Date;
  @Input() disableInputs: boolean;
  @Output() timeChange = new EventEmitter<Date>();

  ngOnInit() {
    this.updateTime(this.time);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.time != null) {
      this.updateTime(changes.time.currentValue);
    } 
  }

  updateTime(timeInput: Date) {
    if (timeInput != null) {
      this.secNow = timeInput.getSeconds();
      this.secondsDegrees = ((this.secNow / 60) * 360) + 180;
      
      this.minNow = timeInput.getMinutes();
      this.minsDegrees = ((this.minNow / 60) * 360) + ((this.secNow / 60) * 6) + 180;
      
      this.hourNow = timeInput.getHours();
      this.hourDegrees = ((this.hourNow / 12) * 360) + ((this.minNow / 60) * 30) + 180;
    }
  }

  updateHour(newHour: any) {
    this.time.setHours(newHour.target.value);
    this.timeChange.emit(this.time);
  }

  updateMin(newMin: any) {
    this.time.setMinutes(newMin.target.value);
    this.timeChange.emit(this.time);
  }

  updateSec(newSec: any) {
    this.time.setSeconds(newSec.target.value);
    this.timeChange.emit(this.time);
  }
}
