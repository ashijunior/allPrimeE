import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class Grid3Component implements OnInit {
  public localData: Employee[] = [];
  title = 'Grid3';

  ngOnInit(): void {
    this.localData = employeesData;
  }

}
