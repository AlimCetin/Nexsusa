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
    menuItems: any[] = [];
    languages: any[] = [];
    languagesDefault: any = {};
    languageId: number = 1;
    navbarItems: any[] = [];


    location: any;
    navbarClass: any;

    classApplied = false;

    search = "Search...";

    button = {
        link: "/solutions",
        label: "Get Started",
    };

    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    constructor(
        private router: Router,
        location: Location,
        private languageService: LanguageService,
        private navbarService: NavbarService,
        private sharedService: SharedService
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
    }

    getLanguageService(): void {
        this.languageService.getLanguages().subscribe({
            next: (response) => {
                if (response.statusCode == 200) {
                    this.languages = response.data;
                    for (const element of response.data) {
                        if (element.isDefault == true) {
                            this.languagesDefault = element;
                            this.sharedService.setData(element)
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
        this.navbarService.getNavbarItems(this.languageId).subscribe({
            next: (response) => {
                console.log("navbar " + response.data);
                if (response.statusCode == 200) {
                    this.menuItems = response.data.map((item) => ({
                        label: item.name,
                        link: item.url,
                        id: item.id,
                        icon: item.icon,
                        children:
                            item.navBarItemSubItems &&
                            item.navBarItemSubItems.length > 0
                                ? item.navBarItemSubItems.map((subItem) => ({
                                      label: subItem.name,
                                      link: subItem.url,
                                      id: item.id,
                                      icon: item.icon,
                                  }))
                                : [],
                    })); // Gelen veriyi navbarItems dizisine ata
                }
            },
            error: (err) => {
                console.error("Navbar öğeleri alınamadı:", err);
            },
        });
    }

    selectLanguage(language: any): void {
        this.languagesDefault = language; // Seçilen dili set et
        this.languageId = language.id;
        this.getNavbarItems();
        this.sharedService.setData(language.id)
    }
}
