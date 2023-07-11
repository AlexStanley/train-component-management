import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainComponentService {
  private apiUrl = 'https://localhost:5000/api/traincomponents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(trainComponent: any) {
    return this.http.post(this.apiUrl, trainComponent);
  }

  update(id: number, trainComponent: any) {
    return this.http.put(`${this.apiUrl}/${id}`, trainComponent);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
