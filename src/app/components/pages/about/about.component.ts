import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AboutService } from 'src/app/services/about/about.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	aboutData: any;

  
	constructor(private aboutService: AboutService,
  ) {}
  
  
  
  ngOnInit(): void {
	  this.getAboutData();
  }
  
  
  
  getAboutData(): void {
	const languageId = Number(localStorage.getItem("languageId"));
	  this.aboutService.getAbout(languageId).subscribe({
		next: (response) => {
		  console.log('about Data:', response); // Veriyi kontrol etmek için
		  if (response.statusCode==200) {
			this.aboutData=response.data
		  }
		  
		},
		error: (err) => {
		  console.error('case verisi alınamadı:', err);
		},
	  });
  }
    
  clientWrap: OwlOptions = {
	loop:true,
	margin:30,
	nav:false,
	mouseDrag: true,
	items:1,
	dots: false,
	autoHeight: true,
	autoplay: true,
	smartSpeed: 800,
	autoplayHoverPause: true,
	center: false,
	responsive:{
		0:{
			items:1,
			margin: 10,
		},
		576:{
			items:1,
		},
		768:{
			items:2,
			margin: 20,
		},
		992:{
			items:2,
		},
		1200:{
			items:2,
		}
	}
}


}