import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SolutionsService } from 'src/app/services/solutions/solutions.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  languageId: any;
  solutionsData:any;

 
  constructor(private solutionsService: SolutionsService,
    private sharedService: SharedService
) {}

ngOnInit(): void {
  this.sharedService.lang$.subscribe((lang)=>{this.languageId=lang.id;
    this.getSolutionsPageData();
  })
    this.getSolutionsPageData();
}



getSolutionsPageData(): void {
    this.solutionsService.getSolutions(this.languageId).subscribe({
      next: (response) => {
        console.log('HomePage Data:', response); // Veriyi kontrol etmek için
        if (response.statusCode==200) {
   this.solutionsData=response.data

        }
        
      },
      error: (err) => {
        console.error('HomePage verisi alınamadı:', err);
      },
    });
  }

}
