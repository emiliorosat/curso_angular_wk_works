import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonListJSON } from '../../persons'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = PersonListJSON

  constructor() { }

  ngOnInit(): void {

  }

  handleDelete(i: number){
    this.persons.splice(i, 1)
  }

}
