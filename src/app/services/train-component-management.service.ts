import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainComponentManagementService {
  private apiUrl = 'https://localhost:5000/api/componenthierarchies';

  constructor(private http: HttpClient) {}

  getHierarchy(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/hierarchy`);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(parentId: number, childId: number) {
    return this.http.post(
      `${this.apiUrl}/components/${parentId}/children/${childId}`,
      null
    );
  }

  update(elementId: number, newParentId: number) {
    return this.http.put(
      `${this.apiUrl}/${elementId}/newparent/${newParentId}`,
      null
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
