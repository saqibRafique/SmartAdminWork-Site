import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss'],
})
export class BeforeAfterComponent {}
