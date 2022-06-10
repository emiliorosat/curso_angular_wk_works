import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-new-spent',
  templateUrl: './new-spent.component.html',
  styleUrls: ['./new-spent.component.css'],
  providers: [BankService]
})
export class NewSpentComponent implements OnInit {

  constructor(private route: Router, private service: BankService) { }

  ngOnInit(): void {
  }

  handleSubmit($event: any){
    console.log($event)
    const val = $event.value
    val.income = 0
    console.log(val)
    this.service.setRegister(val).subscribe(
      (res)=>{
        console.log(res)
        this.route.navigate(['/proyecto'])
      },
      (err)=> console.error(err)
    )
  }
  handleCancel(){
    this.route.navigate(['proyecto'])
  }

}
