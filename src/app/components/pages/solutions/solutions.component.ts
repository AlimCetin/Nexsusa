import { LoadingService } from './../../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SolutionsService } from 'src/app/services/solutions/solutions.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  solutionsData:any;
imagesUrl=environment.imagesUrl;
 
  constructor(private solutionsService: SolutionsService,
  private loadingService:LoadingService
) {}

ngOnInit(): void {
    
    try {
      this.loadingService.show(); // Loader'ı başlat
this.getSolutionsPageData();

    } catch (error) {
      console.error("Veri yüklenirken hata oluştu:", error);
    } finally {
        setTimeout(() => {
            this.loadingService.hide();
        }, 3000);
    }
}



getSolutionsPageData(): void {
  const languageId = Number(localStorage.getItem("languageId"));
    this.solutionsService.getSolutions(languageId).subscribe({
      next: (response) => {
        console.log('solution Data:', response); // Veriyi kontrol etmek için
        if (response.isSuccess) {
   this.solutionsData=response.data

        }
        
      },
      error: (err) => {
        console.error('solution verisi alınamadı:', err);
      },
    });
  }

}
