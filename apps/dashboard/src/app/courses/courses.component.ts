import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course, emptyCourse } from '@education/api-interfaces';
import { CoursesFacade } from '@education/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'education-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  form: FormGroup;
  courses$;
  selectedCourse$: Observable<Course> = this.coursesFacade.selectedCourse$;
  constructor(
    private coursesFacade: CoursesFacade,
    private formBuilder: FormBuilder
  ) {
    this.courses$ = coursesFacade.allCourses$;
    coursesFacade.loadCourses();
  }

  ngOnInit() {
    this.initForm();
    this.coursesFacade.loadCourses();
    this.reset();
  }

  selectCourse(course: Course) {
    this.coursesFacade.selectCourse(course.id);
    this.form.patchValue(course);
  }

  reset() {
    this.form.reset();
    this.selectCourse(emptyCourse);
  }

  createCourse(course: Course) {
    this.coursesFacade.createCourse(course);
    this.reset();
  }

  updateCourse(course: Course) {
    this.coursesFacade.updateCourse(course);
    this.reset();
  }

  saveCourse(course: Course) {
    course.id
      ? this.coursesFacade.updateCourse(course)
      : this.coursesFacade.createCourse(course);
  }

  deleteCourse(course: Course) {
    this.coursesFacade.deleteCourse(course);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      className: ['', Validators.required],
      teacher: ['', Validators.required],
      description: ['', Validators.required],
      classSize: ['', Validators.required],
      failRate: [''],
    });
  }
}
