import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.css'],
  providers: [BankService]
})
export class NewIncomeComponent implements OnInit {

  constructor(private route: Router,
    private service: BankService) { }

  ngOnInit(): void {
  }

  handleSubmit($event: any){
    console.log($event)
    const val = $event.value
    val.spent = 0
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
