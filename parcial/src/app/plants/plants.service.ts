import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Plants } from './plants.model';

@Injectable({
 providedIn: 'root'
})
export class PlantsService {

 private apiUrl: string = environment.baseUrl;

 constructor(private http: HttpClient) { }

 getPlants(): Observable<Plants[]> {
   return this.http.get<Plants[]>(this.apiUrl);
 }

}