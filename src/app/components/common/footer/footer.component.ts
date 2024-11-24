import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer:any;

  constructor( private sharedService:SharedService) { }

  logoUrl = 'assets/images/logo2.png';

  


  serviceTitle = 'Our Service';
 

  quickLinksTitle = 'Quick Links';
  
  contact="Contact";

  

  footerText = '© 2024. Nexsus Software All rights reserved.';

  
  ngOnInit(): void {
    this.sharedService.footerData$.subscribe((footData)=>{this.footer=footData;})
  }

}
