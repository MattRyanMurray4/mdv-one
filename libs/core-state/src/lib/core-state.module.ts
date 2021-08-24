import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesFacade } from './courses/courses.facade';

@NgModule({
  imports: [CommonModule],
  providers: [CoursesFacade],
})
export class CoreStateModule {}
