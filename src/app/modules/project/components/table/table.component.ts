import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() records: any[] = []
  @Input() sortedRecords: any[] = []
  @Input() show: number = 0




  constructor() { }

  ngOnInit(): void {

  }

  sortData(sort: Sort) {
    const data = this.records.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedRecords = data;
      return;
    }

    this.sortedRecords = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date':
          return compare(a.date, b.date, isAsc);
        case 'concept':
          return compare(a.concept, b.concept, isAsc);
        case 'spent':
          return compare(a.spent, b.spent, isAsc);
        case 'income':
          return compare(a.income, b.income, isAsc);
        default:
          return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }




}
