import { importProvidersFrom, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class LanguageService {
    private langUrl = environment.baseUrl + "Language/Get";

    constructor(private _http: HttpClient) {}

    getLanguages(): Observable<any> {
        return this._http.get(this.langUrl);
    }

    getCurrentLanguageId(): number {
        return Number(localStorage.getItem("languageId"));
    }
    getTranslation(value: string, languageId: number): string {
        return value;
    }
}
