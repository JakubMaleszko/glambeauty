import { Component, OnInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // This code runs only in the browser
      const script = this.renderer.createElement('script');
      script.src = 'https://embedsocial.com/cdn/aht.js';
      script.id = 'EmbedSocialWidgetScript';
      script.async = true;
      this.renderer.appendChild(document.head, script);
    }
  }
}