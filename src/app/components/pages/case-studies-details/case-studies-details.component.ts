import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-studies-details',
  templateUrl: './case-studies-details.component.html',
  styleUrls: ['./case-studies-details.component.scss']
})
export class CaseStudiesDetailsComponent implements OnInit {

  constructor() { }
  caseStudies = [
    {
      title: "Joe’s Company Software Development Case",
      image: "assets/images/case-details/1.jpg",
      description: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...",
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text...",
      ],
    },
    {
      title: "Ride Share App UX Studies & Development Case",
      image: "assets/images/solutions-details/5.png",
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
        "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures...",
      ],
    },
  ];
  socialLinks = [
    { icon: 'bxl-facebook', link: 'https://facebook.com' },
    { icon: 'bxl-twitter', link: 'https://twitter.com' },
    { icon: 'bxl-pinterest-alt', link: 'https://pinterest.com' },
    { icon: 'bxl-instagram', link: 'https://instagram.com' },
  ];
  ngOnInit(): void {
  }

}
