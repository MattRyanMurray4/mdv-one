import { Component } from '@angular/core';

@Component({
  selector: 'education-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Educational Application';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'courses', icon: 'view_list', title: 'Courses' },
  ];
}
