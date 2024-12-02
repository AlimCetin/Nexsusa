import { importProvidersFrom, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class LanguageService {
    private langUrl = environment.baseUrl + "Language/Get";
    private apiUrl = environment.baseUrl + "Language/GetAllStringResources";

    constructor(private _http: HttpClient) {}

    initializeLanguage(): void {
        const languageId = this.getCurrentLanguageId();
        this.loadTranslations(languageId);
    }
    //=========================================================================================================
    getLanguages(): Observable<any> {
        return this._http.get(this.langUrl);
    }
    //=========================================================================================================
    getCurrentLanguageId(): number {
        return Number(localStorage.getItem("languageId")) ?? 1;
    }
    //=========================================================================================================
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
    //=========================================================================================================
    async loadTranslations(languageId: number): Promise<any> {
        try {
            var result: any = await firstValueFrom(
                this._http.get(`${this.apiUrl}?languageId=${languageId}`)
            );
            if (result == null) {
                return await firstValueFrom(
                    this._http.get(`${this.apiUrl}?languageId=1`)
                );
            }
            localStorage.setItem(
                "lang" + languageId.toString(),
                JSON.stringify(result.data)
            );
        } catch {
            console.error("Error in getting translations");
        }
    }
    //=========================================================================================================
}
