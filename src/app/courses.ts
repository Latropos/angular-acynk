
interface ICourse {
    getEtcs:(number)=>number;
    
    name: string,
    etcs: number,
    description?: string,
    sym?: string;
    type: ClassType;
    maxStudents: number;
    rate: number;
}

enum ClassType {
  wyklad,
  cwiczenia,
  lab,
  projekt
}

class Course implements ICourse {   
    name: string;
    etcs: number;
    type: ClassType;
    maxStudents: number;
    rate: number;
    description?: string;
    sym?: string;


    constructor(  name: string,
                  etcs: number, 
                  type: ClassType,
                  maxStudents: number,
                  rate: number,
                  description?: string,
                  sym?: string){ 
                this.etcs = etcs;
                this.name = name;
                this.type = type;
                this.maxStudents = maxStudents;
                this.rate = rate;
                this.description = description;
    }

    getEtcs(price:number):number { 
        return this.etcs;
    }
}




export const courses = [

  new Course('Muzyka', 0, 0, 150, 3, 'Gra na fortepianie, pianinie i paru innych instrumentach, ale tylko klawiszowych.'),
  new Course('Muzyka', 5, 2, 20, 3, 'Gra na instrumentach'),
  new Course('Plastyka', 0, 0, 100, 3, 'Zajęcia artystyczne'),
  new Course('Plastyka', 2, 1, 20, 3, 'Zajęcia artystyczne'),
  new Course('Psychologia', 0, 0, 80, 3, 'Wykład z psychologii, nieobowiązkowy'),
  new Course('Psychologia', 7, 0, 50, 3, 'Labolatorium z psychologii'),
  new Course('Plastyka', 4, 2, 50, 3, 'Projekt z zajęć artystycznych, trzeba namalować domek'),
  new Course('Psychologia', 7, 0, 50, 3, 'Labolatorium z psychologii'),  
  new Course('Język angielski', 4, 1, 50, 3, 'Nauka angielskiego na poziomie od średniozaawansowanego do zaawansowanego'),
  new Course('Język niemiecki', 4, 1, 50, 3, 'Nauka niemieckiego na poziomie od początkkującego do zaawansowanego'),
];
/*
export const courses = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];
*/

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/