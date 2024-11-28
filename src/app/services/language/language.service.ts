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
    async getTranslation(key: string, languageId: number): Promise<string> {
        const lang = await JSON.parse(
            localStorage.getItem("lang" + languageId.toString())
        );
        if (lang) {
            const resource = await lang.find((x: any) => x.key === key);
            if (resource) {
                return resource.value;
            }
        }
        return key;
    }
}
