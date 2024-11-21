import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  constructor() { }
  services = [
    {
      title: 'Visual Design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda.',
      image: 'assets/images/service/s1.png',
      link: '/solutions-details',
    },
    {
      title: 'Development',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda.',
      image: 'assets/images/service/s2.png',
      link: '/solutions-details',
    },
    {
      title: 'QA Testing',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda.',
      image: 'assets/images/service/s3.png',
      link: '/solutions-details',
    },
    {
      title: 'IT Management',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda.',
      image: 'assets/images/service/s4.png',
      link: '/solutions-details',
    },
    {
      title: 'Cyber Security',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda.',
      image: 'assets/images/service/s5.png',
      link: '/solutions-details',
    },
    {
      title: 'Wireless Connectivity',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda.',
      image: 'assets/images/service/s6.png',
      link: '/solutions-details',
    },
  ];
  ngOnInit(): void {
  }

}
