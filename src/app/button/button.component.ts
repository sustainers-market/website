import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
} )
export class ButtonComponent {
  @Input() text: string
  @Input() action: Function
  @Input() link: string

  constructor(private router: Router) {}

  onClick() {
    if (this.link) {
      this.router.navigate([this.link])
    } else if (this.action) {
      this.action()
    }
  }
}