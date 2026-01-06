import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-problem-strip',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './problem-strip.component.html',
  styleUrls: ['./problem-strip.component.scss'],
})
export class ProblemStripComponent {}
