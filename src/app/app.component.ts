import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'synced-clocks';
  
  timeNow: Date = new Date();
  useLiveTime = false;
  liveTimeInterval: any;

  updateTime = () => {
    this.timeNow = new Date();
  }

  setLiveTime() {
    this.useLiveTime = !this.useLiveTime;
    if (this.useLiveTime) {
      this.updateTime(); // this line removes the 1 sec delay before interval starts
      this.liveTimeInterval = setInterval(this.updateTime, 1000);
    } else {
      clearInterval(this.liveTimeInterval);
    }
  }

  updateSharedTime(newTime: Date) {
    this.timeNow = new Date(newTime);
  }
}
