import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { BankComponent } from './pages/bank/bank.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { NewSpentComponent } from './pages/new-spent/new-spent.component';
import { NewIncomeComponent } from './pages/new-income/new-income.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BankService } from './services/bank.service';
import {MatSortModule} from '@angular/material/sort';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [
    BankComponent,
    FormComponent,
    TableComponent,
    NewSpentComponent,
    NewIncomeComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    NgxMaskModule.forRoot()
  ],
  providers: [BankService]
})
export class ProjectModule { }
