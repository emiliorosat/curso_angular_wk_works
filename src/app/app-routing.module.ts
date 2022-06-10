import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './modules/person-list/pages/persons/persons.component';
import { PresentationComponent } from './modules/presentation/page/presentation/presentation.component';

const routes: Routes = [
  {path: 'presentation', component: PresentationComponent},
  {path: 'personas', component: PersonsComponent},
  {path: 'proyecto', loadChildren: ()=> import('./modules/project/project.module')
  .then(m => m.ProjectModule)},
  {path: '**', redirectTo: 'presentation'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
