import { SocialLinksService } from './../../../services/socialLinks/social-links.service';
import { Component, OnInit } from "@angular/core";

import {
    Location,
    LocationStrategy,
    PathLocationStrategy,
} from "@angular/common";
import { LanguageService } from "../../../services/language/language.service";
import { NavbarService } from "../../../services/navbar/navbar.service";
import { SharedService } from "../../../services/shared.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

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
    logoUrl = environment.logoUrl1;
    languageDefaultName = localStorage.getItem("languageName");
    languages: any;
    navbarItems: any[] = [];
    subItems = [];
    homePageInfo: any;
    navbarClass: any;
socialLinks:any;
    classApplied = false;

    menuItems: { label: string; link: string; children: any[] }[] = [
        {
            label: "Home",
            link: "/",
            children: [],
        },
        {
            label: "About",
            link: "/about",
            children: [],
        },
        {
            label: "Solutions",
            link: "solutions",
            children: [],
        },
        {
            label: "Case Studies",
            link: "case-studies",
            children: [],
        },
        {
            label: "Contact",
            link: "/contact",
            children: [],
        },
    ];

    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    constructor(
        private navbarService: NavbarService,
        private sharedService: SharedService,
        private http: HttpClient,
        private languageService: LanguageService,
        private socialLinksService:SocialLinksService
    ) {}

    ngOnInit(): void {
        this.init();
        const languageId = Number(localStorage.getItem("languageId"));
        this.http
            .get(
                environment.baseUrl +
                    `HomePageInfo/GetHomePageInfo?languageId=${languageId}`
            )
            .subscribe((response: any) => {
                console.log(response);
                this.homePageInfo = response.data;
            });
    }

    async init() {
        await this.getLanguages();
        await this.getSocialLinksData();
    }
    async getLanguages() {
        return await this.sharedService.getLanguages().then((response: any) => {
            console.log("Languages:", response);
            if (response.isSuccess) {
                this.languages = response.data;
                for (const element of response.data) {
                    if (
                        element.isDefault == true &&
                        !localStorage.getItem("languageId")
                    ) {
                        this.languageDefaultName = element.name;
                        localStorage.setItem("languageId", element.id);
                        localStorage.setItem("languageName", element.name);
                    }
                    console.log("Default Language:", this.languageDefaultName);
                }
            }
        });
    }

    getNavbarItems(): void {
        this.sharedService.navbarData$.subscribe({
            next: (response) => {
                console.log("navbar " + response.data);
                if (response.statusCode === 200) {
                    response.data.forEach((item) => {
                        this.menuItems.forEach((element) => {
                            // Label kontrolü
                            if (element.label === item.label) {
                                // `item.navBarItemSubItems` kontrolü
                                if (
                                    item.navBarItemSubItems &&
                                    item.navBarItemSubItems.length > 0
                                ) {
                                    this.subItems = item.navBarItemSubItems.map(
                                        (subItem) => ({
                                            label: subItem.name,
                                            link: subItem.url,
                                            id: item.id,
                                            icon: item.icon,
                                        })
                                    );
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
        localStorage.setItem("languageName", language.name);
        this.languageDefaultName = language.name; // Seçilen dili set et
        localStorage.setItem("languageId", language.id);
        this.languageService.loadTranslations(language.id); // String kaynaklarını yükle
        window.location.reload();
    }
    getSocialLinksData(): void {
          this.socialLinksService.getSocialLinks().subscribe({
            next: (response) => {
              console.log('about Data:', response); // Veriyi kontrol etmek için
              if (response.statusCode==200) {
                this.socialLinks=response.data
              }
              
            },
            error: (err) => {
              console.error('case verisi alınamadı:', err);
            },
          });
      }
        
    
}
