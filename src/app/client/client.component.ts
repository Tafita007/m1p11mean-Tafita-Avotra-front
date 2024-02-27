import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.loadExternalStyleSheet('assets/css/css-C/bootstrap.min.css');
    this.loadExternalStyleSheet('assets/css/css-C/style.css');
  }

  loadExternalStyleSheet(url: string): void {
    const link = this.renderer.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', url);
    this.renderer.appendChild(this.elementRef.nativeElement, link);
  }
}
