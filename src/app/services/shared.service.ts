import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Veri paylaşımı için BehaviorSubject
  private language = new BehaviorSubject<any>(null);
  lang$ = this.language.asObservable();

  setLang(langNew: any): void {
    this.language.next(langNew);
  }

  getLang(): any {
    return this.language.value;
  }
  
/* ---------------------------------------- */
private navbar = new BehaviorSubject<any>(null);
  navbarData$ = this.navbar.asObservable();

  setNavbar(navbarNew: any): void {
    this.navbar.next(navbarNew);
  }

  getNavbar(): any {
    return this.navbar.value;
  }
  
/* ---------------------------------------- */
private footer = new BehaviorSubject<any>(null);
  footerData$ = this.footer.asObservable();

  setFooter(footerNew: any): void {
    this.footer.next(footerNew);
  }

  getFooter(): any {
    return this.footer.value;
  }



}
