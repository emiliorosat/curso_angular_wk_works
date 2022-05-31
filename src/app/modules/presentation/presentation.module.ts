import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { PresentationComponent } from './page/presentation/presentation.component';



@NgModule({
  declarations: [
    CardComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PresentationModule { }
