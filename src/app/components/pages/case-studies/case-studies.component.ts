import { CaseService } from './../../../services/case/case.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {
  languageId: any;
  caseData: any;

  constructor(private caseService: CaseService,
    private sharedService: SharedService
) {}



ngOnInit(): void {
  this.sharedService.lang$.subscribe((lang)=>{this.languageId=lang.id;
    this.getCaseData();
  })
    this.getCaseData();
}



getCaseData(): void {
    this.caseService.getCase(this.languageId).subscribe({
      next: (response) => {
        console.log('case Data:', response); // Veriyi kontrol etmek için
        if (response.statusCode==200) {
          this.caseData=response.data
        }
        
      },
      error: (err) => {
        console.error('HomePage verisi alınamadı:', err);
      },
    });
  }


}
