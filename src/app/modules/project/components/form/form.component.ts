import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup
  today: string = new Date().toLocaleDateString()

  @Input() type: number = 0


  constructor(
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      date: ['', Validators.required],
      concept:  ['', Validators.required],
      income: [null, Validators.min(0)],
      spent: [null, Validators.min(0)]
    })
  }

  ngOnInit(): void {
    if(this.type == 0){
      this.form.controls["spent"].addValidators([Validators.required])
    }else{
      this.form.controls["income"].addValidators([Validators.required])
    }
  }

  @Output() onSubmit: EventEmitter<any> = new EventEmitter

  handleSubmit(){
    if(!this.form.valid){
      return
    }else{
      let ndate = new Date(this.form.get('date')?.value)//.toLocaleString("en-US", {timeZone:  'America/Santo_Domingo'})
      ndate.setTime( ndate.getTime() + ndate.getTimezoneOffset()*60*1000 );
      this.form.get('date')?.setValue(ndate)
      this.onSubmit.emit(this.form)
    }
  }

  @Output() onCancel: EventEmitter<void> = new EventEmitter

  handleCancel(){
    this.onCancel.emit()
  }

}
