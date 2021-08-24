import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@education/api-interfaces';

@Component({
  selector: 'education-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
