import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class Grid1Component implements OnInit {
  public localData: Employee[] = [];
  title = 'Grid1';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
