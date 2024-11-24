import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  private apiUrl = environment.baseUrl+'ServicePage/Get'; // API URL'si

  constructor(private http: HttpClient) {}

  // Navbar öğelerini almak için servis fonksiyonu
  getSolutions(languageId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?languageId=${languageId}`);
  }
}
