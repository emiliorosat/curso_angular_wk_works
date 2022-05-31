import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  title = 'presentacion';
  name: string = "Emilio Rosa"
  bio: string = "Desarrollador web, Ingeniero en electronica, tecnologo en desarrollo de software."

}
