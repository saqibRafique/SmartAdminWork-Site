import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatChipsModule, MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  private calendlyUrl = 'https://calendly.com/azhar-rafique-thinkandcode/';

  openCalendly() {
    window.open(this.calendlyUrl, '_blank', 'noopener,noreferrer');
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
