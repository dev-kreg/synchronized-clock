import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ClockComponent } from './Clock/clock.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ClockComponent
      ],
    }).compileComponents();
  });

  it('should create the app', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('checkbox should toggle useLiveTime', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appEle = fixture.nativeElement as HTMLElement;
    appEle.getElementsByClassName("live-time-input")[0].dispatchEvent(new MouseEvent("click"))

    expect(app.useLiveTime).toBeTruthy();
  }));
});
