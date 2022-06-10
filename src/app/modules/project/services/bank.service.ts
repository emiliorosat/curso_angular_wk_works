import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BankService {

  api: string = environment.api + "/v1/account-balance"

  constructor(
    private http : HttpClient
  ) { }

  getAccountBalance():Observable<any>
  {
    return this.http.get(`${this.api}`)
  
  }
  setRegister(model: any):Observable<any>
  {
    return this.http.post(`${this.api}`, model)
  
  }
}
