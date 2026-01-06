import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private calendlyRawUrl = 'https://calendly.com/azhar-rafique-thinkandcode/';
  calendlyUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.calendlyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.calendlyRawUrl
    );
  }

  openCalendly() {
    window.open(this.calendlyRawUrl, '_blank', 'noopener,noreferrer');
  }
}
