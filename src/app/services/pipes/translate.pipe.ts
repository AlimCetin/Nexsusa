import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../language/language.service';
@Pipe({
    name: 'translates',
    pure: true // Dinamik güncellemeler için
})
export class TranslatesPipe implements PipeTransform {
    constructor(private translationService: LanguageService) { }

    async transform(value: string): Promise<string> {
        const languageId = this.translationService.getCurrentLanguageId();
        try{
            return this.translationService.getTranslation(value,languageId) || value;
        }
        catch(error){
            console.error("Translation error: ", error);
            return value;
        }
    }
}
