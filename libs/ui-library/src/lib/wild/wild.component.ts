import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'education-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss'],
})
export class WildComponent {
  constructor(private router: Router) {}

  redirectTo() {
    this.router.navigate(['/courses']);
  }
}
