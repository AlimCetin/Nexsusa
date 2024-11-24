import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import {
    Location,
    LocationStrategy,
    PathLocationStrategy,
} from "@angular/common";
import { LanguageService } from "../../../services/language/language.service";
import { NavbarService } from "../../../services/navbar/navbar.service";
import { SharedService } from '../../../services/shared.service';


@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    providers: [
        Location,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
    ],
})
export class NavbarComponent implements OnInit {
  
    languages: any[] = [];
    languagesDefault: any = {};
    language: any;
    navbarItems: any[] = [];
    subItems=[];
    homePageInfo:any;
    location: any;
    navbarClass: any;
    
    classApplied = false;

    menuItems: { label: string; link: string; children: any[] }[] = [
        {
          label: 'Home',
          link:'/',
          children:[]
        },
        {
          label: 'About',
          link: '/about',
          children:[]
        },
        {
          label: 'Solutions',
          link: '#',
          children:[]
        },
        {
          label: 'Case Studies',
          link: '#',
          children:[]
        },
        {
          label: 'Contact',
          link: '/contact',
          children:[]
        }
      ];

    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    constructor(
        private router: Router,
        location: Location,
        private languageService: LanguageService,
        private navbarService: NavbarService,
        private sharedService: SharedService,
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.location = this.router.url;
                if (this.location == "/home-three") {
                    this.navbarClass = "navbar-area three";
                } else {
                    this.navbarClass = "navbar-area";
                }
            }
        });
    }

    ngOnInit(): void {
        this.getLanguageService();
        this.getNavbarItems();
        this.sharedService.lang$.subscribe((langData)=>{this.language=langData;})
        this.sharedService.navbarData$.subscribe((navData)=>{this.homePageInfo=navData;})
    }

    getLanguageService(): void {
        this.languageService.getLanguages().subscribe({
            next: (response) => {
                if (response.statusCode == 200) {
                    this.languages = response.data;
                    for (const element of response.data) {
                        if (element.isDefault == true) {
                            this.languagesDefault = element;
                           this.sharedService.setLang(element);
                        }
                    }
                }

                console.log("Languages:", this.languages);
            },
            error: (error) => {
                console.error("Error:", error);
            },
        });
    }

    getNavbarItems(): void {
        this.navbarService.getNavbarItems(this.language.id).subscribe({
            next: (response) => {
                console.log("navbar " + response.data);
                if (response.statusCode === 200) {
                    response.data.forEach((item) => {
                        this.menuItems.forEach((element) => {            
                            // Label kontrolü
                            if (element.label === item.label) {
                                // `item.navBarItemSubItems` kontrolü
                                if (item.navBarItemSubItems && item.navBarItemSubItems.length > 0) {
                                     this.subItems = item.navBarItemSubItems.map((subItem) => ({
                                        label: subItem.name,
                                        link: subItem.url,
                                        id: item.id,
                                        icon: item.icon,
                                    }));
                                    // Sub-items'ları ekleme
                                    element.children.push(...this.subItems);
                                }
                            }
                        });
                    });
                }
            },
            error: (err) => {
                console.error("Navbar öğeleri alınamadı:", err);
            },
        });
    }

    selectLanguage(language: any): void {
        this.languagesDefault = language; // Seçilen dili set et
        this.sharedService.setLang(language);
        this.getNavbarItems();
    }
}
