import { Component } from '@angular/core';

import { courses } from '../courses';

let x : number;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  Kursy = courses;
  
  share() {
    window.alert('The button did nothing!');
  }

  show(kursID) {
    if (x==kursID) x=undefined;
    else x = kursID;
  }

  check(kursID) {
    if (kursID - x == 0) return true;
    return false;  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/