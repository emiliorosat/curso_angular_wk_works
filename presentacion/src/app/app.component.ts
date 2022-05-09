import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presentacion';
  name: string = "Emilio Rosa"
  bio: string = "Desarrollador web, Ingeniero en electronica, tecnologo en desarrollo de software."
}

