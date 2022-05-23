import { Component, OnInit } from '@angular/core';
import { IPerson } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons: IPerson[] = []


  ngOnInit(): void {
    this.persons.push({
      name: "nombre 1",
      bio: "informacion de una persona bio"
    })
    this.persons.push({
      name: "nombre 2",
      bio: "informacion de una persona bio"
    })
  }

  delete(i: any){
    this.persons.splice(i, 1)
  }

  
}
