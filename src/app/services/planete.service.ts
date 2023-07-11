import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planetes } from 'src/models/planete';

@Injectable({
  providedIn: 'root'
})
export class PlaneteService {

  constructor(private http: HttpClient) { }

  getPlanetess(): Observable<Planetes[]>{
    return this.http.get<Planetes[]>("http://localhost:3000/planetes")
  }
}
