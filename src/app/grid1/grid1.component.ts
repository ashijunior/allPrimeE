import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss'],
  standalone: false
})
export class Grid1Component implements OnInit {
  public localData: Employee[] = [];
  title = 'Grid1';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
