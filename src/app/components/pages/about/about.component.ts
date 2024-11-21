import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor() { }
	testimonials = [
		{
		  image: 'assets/images/client/1.jpg',
		  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		  name: 'Steven Jony',
		  position: 'CEO of Company'
		},
		{
		  image: 'assets/images/client/2.jpg',
		  text: 'Quis suspendisse typesetting ipsum dolor sit amet.',
		  name: 'Omit Jacson',
		  position: 'Company Founder'
		}
	  ];
	
	  features: string[] = [
		'Freelancing Traning Course',
		'Technological Consultation',
		'Monthly Paid Workspace',
		'IT Learning Institute',
		'Digital Marketing'
	  ];
	
	  companyDetails = {
		title: 'Innovative It Helping Service Allover the World',
		description: [
		  'It is a long established fact that a reader will be distracted...',
		  'The point of using Lorem Ipsum is that it has a more...'
		]
	  };
    ngOnInit(): void {
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