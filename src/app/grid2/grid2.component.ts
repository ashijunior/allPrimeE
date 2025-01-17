import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';
import { ISortingOptions } from 'igniteui-angular';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.scss'],
  standalone: false
})
export class Grid2Component implements OnInit {
  public localData: Employee[] = [];
  title = 'Grid2';
  public sortingTypes: ISortingOptions[] = [
    {
        mode: 'single'
    }, {
        mode: 'multiple'
    }
  ];
   public sortingOptions: ISortingOptions = this.sortingTypes[1];

  ngOnInit(): void {
    this.localData = employeesData;
  }
}

