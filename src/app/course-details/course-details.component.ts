import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() course; /* send from parent */

  constructor() { }

  ngOnInit() {
  }

}