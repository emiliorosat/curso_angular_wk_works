import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() name: string = ""
  @Input() bio: string = ""
  @Input() photo: string = ""

  @Output() onDelete: EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  handleClick($event: any){
    this.onDelete.emit($event)
  }

}
