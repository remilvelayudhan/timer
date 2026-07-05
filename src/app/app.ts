import { Component, signal } from '@angular/core';

import { Timer } from './components/timer/timer';

@Component({
  selector: 'app-root',
  imports: [Timer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('timer');
}
