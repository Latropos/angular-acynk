
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
                this.sym=sym;
    }

    getEtcs(price:number):number {
        return this.etcs;
    }
}

export const courses = [
  new Course('Muzyka', 0, 0, 150, 3, 'Gra na fortepianie, pianinie i paru innych instrumentach, ale tylko klawiszowych.','attachment'),
  new Course('Muzyka', 5, 2, 20, 3, 'Gra na instrumentach','attachment'),
  new Course('Plastyka', 0, 0, 100, 3, 'Zajęcia artystyczne','brush'),
  new Course('Plastyka', 2, 1, 20, 3, 'Zajęcia artystyczne','brush'),
  new Course('Psychologia', 0, 0, 80, 3, 'Wykład z psychologii, nieobowiązkowy','favorite'),
  new Course('Psychologia', 7, 0, 50, 3, 'Labolatorium z psychologii','favorite'),
  new Course('Plastyka', 4, 2, 50, 3, 'Projekt z zajęć artystycznych, trzeba namalować domek','house'),
  new Course('Psychologia', 7, 0, 50, 3, 'Labolatorium z psychologii','favorite'),
  new Course('Język angielski', 4, 1, 50, 3, 'Nauka angielskiego na poziomie od średniozaawansowanego do zaawansowanego','book'),
  new Course('Język niemiecki', 4, 1, 50, 3, 'Nauka niemieckiego na poziomie od początkkującego do zaawansowanego','book'),
]
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/