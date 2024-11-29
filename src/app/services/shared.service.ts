import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class SharedService {
    _http = inject(HttpClient);

    // Veri paylaşımı için BehaviorSubject
    private language = new BehaviorSubject<any>(null);
    lang$ = this.language.asObservable();

    async getLanguages() {
        return firstValueFrom(this._http.get(environment.baseUrl+"Language/Get")) ;
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
    private navbarInfo = new BehaviorSubject<any>(null);
    navbarInfoData$ = this.navbarInfo.asObservable();

    setNavbarInfo(navbarInfoNew: any): void {
        this.navbar.next(navbarInfoNew);
    }

    getNavbarInfo(): any {
        return this.navbarInfo.value;
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


    /* ---------------------------------------- */
    private footerService = new BehaviorSubject<any>(null);
    footerServiceData$ = this.footerService.asObservable();

    setFooterService(footerNew: any): void {
        this.footerService.next(footerNew);
    }

    getFooterServis(): any {
        return this.footerService.value;
    }
}
// function firstValueFrom(arg0: Observable<Object>) {
//     throw new Error("Function not implemented.");
// }

