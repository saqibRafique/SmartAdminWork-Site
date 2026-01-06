import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { ProblemStripComponent } from '../../sections/problem-strip/problem-strip.component';
import { BeforeAfterComponent } from '../../sections/before-after/before-after.component';
import { FeaturesComponent } from '../../sections/features/features.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    ProblemStripComponent,
    BeforeAfterComponent,
    FeaturesComponent,
    ContactComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
