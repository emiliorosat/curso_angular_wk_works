import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './pages/persons/persons.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    PersonsComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonListModule { }
