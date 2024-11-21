import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions-details',
  templateUrl: './solutions-details.component.html',
  styleUrls: ['./solutions-details.component.scss']
})
export class SolutionsDetailsComponent implements OnInit {

  constructor() { }
  solution = {
    title: 'IT Management',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
    images: ['assets/images/solutions-details/1.png', 'assets/images/solutions-details/2.png'],
    additionalDetails: [
      {
        title: 'QA Testing',
        image: 'assets/images/solutions-details/5.png',
        content: `There are many variations of passages of Lorem Ipsum available...`,
      },
    ],
  };
  ngOnInit(): void {
  }

}
