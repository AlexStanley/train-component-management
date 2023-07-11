import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainComponentAssignQuantityService {
  private apiUrl =
    'https://localhost:5000/api/train-component-quantity-assignments';

  constructor(private http: HttpClient) {}

  getElementById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  assignQuantity(component: any) {
    return this.http.post(this.apiUrl, component);
  }
}
