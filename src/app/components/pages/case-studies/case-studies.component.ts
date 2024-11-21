import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {

  constructor() { }
  caseCategories = ['All', 'Design', 'Development', 'Cyber Security'];

  cases = [
    {
      id: 1,
      category: 'Development',
      title: 'Joe’s Company Software Development Case',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/images/case/c1.jpg',
      link: '/case-studies-details'
    },
    {
      id: 2,
      category: 'Cyber Security',
      title: 'Temperature App UX Studies & Development Case',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/images/case/c6.jpg',
      link: '/case-studies-details'
    },
    // Daha fazla örnek ekleyebilirsiniz
  ];
  ngOnInit(): void {
  }

}
