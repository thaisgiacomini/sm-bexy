import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {



  constructor(private http: HttpClient) { }

 
  postEfetivar(data:any) {
    return this.http.post<any>(environment.urlApi + '/pagar', data);
  }
  
}
