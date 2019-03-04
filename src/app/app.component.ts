import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .postFifth {
      color: white;
    }
  `]
})
export class AppComponent {
  toggleOn = false;
  clickCount = 0;
  clickLog = [];

  onLogClicks(event) {
    if (this.toggleOn === false) {
      this.toggleOn = true;
    } else {
      this.toggleOn = false;
    }
    this.clickCount++;
    this.clickLog.push(`Click number ${this.clickCount}`);
  }

  getColor() {
    if (this.clickLog.length >= 5) {
      return 'blue';
    }
  }
}
