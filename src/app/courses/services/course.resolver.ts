import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private courses: CoursesService) {

  }
  //| Promise<Course> | Course
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Course> {

        const courseUrl = route.paramMap.get("courseUrl");

        return this.courses.loadCourseByUrl(courseUrl);
    }
}
