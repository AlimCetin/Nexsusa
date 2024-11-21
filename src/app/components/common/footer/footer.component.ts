import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  logoUrl = 'assets/images/logo2.png';
  logoAltText = 'logo';
  logolink='/'
  description = 'Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.';
  newsletterHeading = 'Join Newsletter';
  emailPlaceholder = 'Your Email';
  subscribeButtonText = 'Subscribe';

  serviceTitle = 'Our Service';
  services = [
    { name: 'Visual Design', link: '/' },
    { name: 'Development', link: '/' },
    { name: 'QA & Testing', link: '/' },
    { name: 'IT Management', link: '/' },
    { name: 'Cyber Security', link: '/' },
    { name: 'Wireless Connection', link: '/' },
  ];

  quickLinksTitle = 'Quick Links';
  quickLinks = [
    { name: 'FAQ', link: '/faq' },
    { name: 'Service', link: '/solutions' },
    { name: 'Career', link: '/' },
    { name: 'Privacy & Policy', link: '/privecy' },
    { name: 'Terms & Conditions', link: '/terms-condition' },
    { name: 'Data Analysis', link: '/' },
  ];
  contact="Contact";

  footerMenuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Solutions', link: '/solutions' },
    { name: 'Case Studies', link: '/case' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
  ];

  footerText = '© Aiva is Proudly Owned by';
  footerLink = { name: 'HiBootstrap', url: 'https://hibootstrap.com/' };
  
  ngOnInit(): void {
  }

}
