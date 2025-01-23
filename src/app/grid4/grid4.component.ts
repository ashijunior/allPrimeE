import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-grid4',
  templateUrl: './grid4.component.html',
  styleUrls: ['./grid4.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Grid4Component implements OnInit {
  public localData: Employee[] = [];
  title = 'Grid4';

  ngOnInit(): void {
    this.localData = employeesData;
  }

  // Delete row based on index
  deleteRow(rowIndex: number): void {
    // Check if the row index is valid
    if (rowIndex >= 0 && rowIndex < this.localData.length) {
      this.localData.splice(rowIndex, 1);  // Removes the row from the data array
      this.localData = [...this.localData]; // Trigger change detection by resetting the array
    }
  }
}
