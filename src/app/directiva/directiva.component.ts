import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  courseList: string[] = ['Typescript', 'Javascript', 'Java SE', 'C#', 'PHP'];
  show: boolean = true;
  constructor() {}
  setShow(): void {
    this.show = this.show == true ? false : true;
  }
}
