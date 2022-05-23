import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from 'src/app/models/person.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  persons: IPerson[] = []

  @Output()
  onClick: EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit(): void {

   
  }

  onClickDelete(i: number, obj:IPerson){
    this.onClick.emit(i)
  }

}
