import { LoadingService } from './../../../services/loading/loading.service';
import { CaseService } from './../../../services/case/case.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {
  caseData: any;

  constructor(private caseService: CaseService, private loadingService:LoadingService
) {}



ngOnInit(): void {

    try {
      this.loadingService.show(); // Loader'ı başlat
    this.getCaseData();
    } catch (error) {
      console.error("Veri yüklenirken hata oluştu:", error);
    } finally {
        setTimeout(() => {
            this.loadingService.hide();
        }, 3000);
    }
}



getCaseData(): void {
  const languageId = Number(localStorage.getItem("languageId"));
    this.caseService.getCase(languageId).subscribe({
      next: (response) => {
        console.log('case Data:', response); // Veriyi kontrol etmek için
        if (response.statusCode==200) {
          this.caseData=response.data
        }
        
      },
      error: (err) => {
        console.error('case verisi alınamadı:', err);
      },
    });
  }


}
