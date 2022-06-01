import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PersonListModule } from './modules/person-list/person-list.module';
import { PresentationModule } from './modules/presentation/presentation.module';
import { AppComponent } from './root/app.component';
import { NavbarComponent } from './root/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresentationModule,
    PersonListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
