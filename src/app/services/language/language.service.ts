import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private langUrl = 'http://localhost:5026/Language/Get';

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<any> {
    return this.http.get(this.langUrl);
  }
}
