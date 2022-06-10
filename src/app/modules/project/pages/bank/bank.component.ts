import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  providers: [BankService]
})
export class BankComponent implements OnInit {

  records: any[] = []
  recordStore: any[] = []
  recordStoreNoFiltred: any[] = []
  show: number = 0
  search: string = ''
  typeSearch: string = "descripcion"
  type: string = "text"

  constructor(
    private service: BankService
  ) { }

  selectShow(select: number){
    this.show = select

    if(select == 0){
        this.recordStore = this.recordStoreNoFiltred
        this.handleInput({target: {value: this.search}})
      
    }
    if(select == 1){
      this.recordStore = this.recordStoreNoFiltred.filter(f => f.income == 0)
      this.handleInput({target: {value: this.search}})
    }
    if(select == 2){
      this.recordStore = this.recordStoreNoFiltred.filter(f => f.spent == 0)
        this.handleInput({target: {value: this.search}})
    }
  }

  ngOnInit(): void {
    this.service.getAccountBalance().subscribe(
      (res) => {
        console.log(res)
        if(res.success){
          this.records = res.data
          this.recordStore = res.data
          this.recordStoreNoFiltred = res.data
        }
      }
    )
  }

  handleInput($event: any){
    let value = $event.target.value
    this.search = value
    if(value == ''){
      this.records = this.recordStore
    }else{
      this.records = this.recordStore.filter((f)=> {
        let filter = ""
        if(this.typeSearch == "descripcion" ){
          filter = f.concept
        }else if(this.typeSearch == "fecha"){
          let nDate = new Date(f.date)
          let month = `${nDate.getMonth() + 1}`
          filter = `${nDate.getFullYear()}-${ month.padStart(2, "0")}-${nDate.getDate().toString().padStart(2, "0")}`
          console.log(filter, value)
        }else if(this.typeSearch == "ingreso"){
          filter = f.income.toString()
        }else if(this.typeSearch == "gasto"){
          filter = f.spent.toString()
        }
        return new RegExp(value, "gi").test(filter)
      })
    }
  }

  handleFilterBy(filterBy: number){

    if(filterBy === 0){
      this.type = "text"
      this.typeSearch = "descripcion"
    }else if(filterBy === 1){
      this.type = "date"
      this.typeSearch = "fecha"
    }else if(filterBy === 2){
      this.type = "number"
      this.typeSearch = "ingreso"
    }else if(filterBy === 3){
      this.type = "number"
      this.typeSearch = "gasto"
    }
  }



}
