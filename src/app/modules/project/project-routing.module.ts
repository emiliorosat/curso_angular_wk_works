import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './pages/bank/bank.component';
import { NewSpentComponent } from './pages/new-spent/new-spent.component'
import { NewIncomeComponent } from './pages/new-income/new-income.component';


const project_routes: Routes = [
  {path: '', component: BankComponent},
  {path: 'nuevo-gasto', component: NewSpentComponent},
  {path: 'nuevo-ingreso', component: NewIncomeComponent}
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
