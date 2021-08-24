import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@education/api-interfaces';
import { mapTo } from 'rxjs/operators';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Course[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Course>(this.getUrlById(id));
  }

  create(course: Course) {
    return this.httpClient.post<Course>(this.getUrl(), course);
  }

  update(course: Course) {
    return this.httpClient.patch<Course>(this.getUrlById(course.id), course);
  }

  delete(course: Course) {
    return this.httpClient
      .delete<Course>(this.getUrlById(course.id))
      .pipe(mapTo(course));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
