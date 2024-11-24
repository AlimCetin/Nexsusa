import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl =environment.baseUrl+ 'HomePage/GetHomePage'; // API URL

  constructor(private http: HttpClient) {}

  // HomePage verilerini almak için metod
  getHomePage(languageId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?languageId=${languageId}`);
  }
}
