import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private apiUrl = 'http://localhost:5026/NavBarItem/Get'; // API URL'si

  constructor(private http: HttpClient) {}

  // Navbar öğelerini almak için servis fonksiyonu
  getNavbarItems(languageId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?languageId=${languageId}`);
  }
}
