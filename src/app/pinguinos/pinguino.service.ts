import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Pinguino } from './Pinguino';
import { PinguinoDetail } from './PinguinoDetail';

@Injectable({
  providedIn: 'root'
})
export class PinguinoService {

  private apiUrl: string = environment.baseUrl + "pinguinos";

  constructor(private http: HttpClient) { }
  
  getPinguinos(): Observable<PinguinoDetail[]> {
    return this.http.get<PinguinoDetail[]>(this.apiUrl);
  }

}
