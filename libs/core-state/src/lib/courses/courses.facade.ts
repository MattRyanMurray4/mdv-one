import { Injectable } from '@angular/core';
import { Course } from '@education/api-interfaces';
import { CoursesService, NotifyService } from '@education/core-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CoursesFacade {
  private _allCoursesSource$ = new BehaviorSubject<Course[]>([]);
  allCourses$: Observable<Course[]> = this._allCoursesSource$.asObservable();
  private _selectedCourseSource$ = new BehaviorSubject<Course>({} as Course);
  selectedCourse$: Observable<Course> =
    this._selectedCourseSource$.asObservable();
  constructor(
    private coursesService: CoursesService,
    private notify: NotifyService
  ) {}

  loadCourses() {
    this.coursesService
      .all()
      .pipe(
        tap((courses) => this._allCoursesSource$.next(courses)),
        take(1)
      )
      .subscribe();
  }

  selectCourse(courseId: string) {
    return this.coursesService
      .find(courseId)
      .pipe(
        tap((courseId) => this._selectedCourseSource$.next(courseId)),
        take(1)
      )
      .subscribe();
  }

  createCourse(course: Course) {
    return this.coursesService
      .create(course)
      .pipe(
        tap((course) => this._selectedCourseSource$.next(course)),
        take(1)
      )
      .subscribe();
  }

  updateCourse(course: Course) {
    return this.coursesService
      .update(course)
      .pipe(
        tap((course) => this._selectedCourseSource$.next(course)),
        take(1)
      )
      .subscribe();
  }

  deleteCourse(course: Course) {
    return this.coursesService
      .delete(course)
      .pipe(
        tap((course) => this._selectedCourseSource$.next(course)),
        take(1)
      )
      .subscribe();
  }
}
