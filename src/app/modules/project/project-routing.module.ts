import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './pages/bank/bank.component';


const project_routes: Routes = [
  {path: '', component: BankComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(project_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }
