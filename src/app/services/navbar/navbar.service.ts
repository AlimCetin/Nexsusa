import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private apiUrl = environment.baseUrl+'NavBarItem/Get'; // API URL'si

  constructor(private http: HttpClient) {}

  // Navbar öğelerini almak için servis fonksiyonu
  getNavbarItems(languageId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?languageId=${languageId}`);
  }
}
