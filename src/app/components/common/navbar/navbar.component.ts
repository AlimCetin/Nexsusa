import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
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
    languages: any[] = [
        {
            id: 1,
            code: "TR",
            name: "Türkçe",
            isDefault: true,
        },
        {
            id: 1,
            code: "EN",
            name: "English",
            isDefault: true,
        },
    ];
    languagesDefault: any = {
        id: 1,
        code: "TR",
        name: "Türkçe",
        isDefault: true,
    };
    language: any;
    navbarItems: any[] = [];
    subItems = [];
    homePageInfo: any;
    location: any;
    navbarClass: any;

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
            link: "#",
            children: [],
        },
        {
            label: "Case Studies",
            link: "#",
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
        private router: Router,
        location: Location,
        private languageService: LanguageService,
        private navbarService: NavbarService,
        private sharedService: SharedService,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.init();
        const languageId = Number(localStorage.getItem("languageId"));
        this.http
            .get(environment.baseUrl + `HomePageInfo/GetHomePageInfo?languageId=${languageId}`)
            .subscribe((response: any) => {
                console.log(response);
                this.homePageInfo = response.data;
            });
    }

    async init() {
        // this.getLanguageService();
        await this.getLanguages();
    }
    async getLanguages() {
        return await this.sharedService.getLanguages().then((response: any) => {
            console.log("Languages:", response);
            if (response.isSuccess) {
                this.languages = response.data;
                for (const element of response.data) {
                    if (element.isDefault == true) {
                        this.languagesDefault = element;
                        this.language = element;
                        this.sharedService.setLang(element);
                    }
                    console.log("Default Language:", this.languagesDefault);
                }
            }
        });
    }

    getNavbarItems(): void {
        const languageId = Number(localStorage.getItem("languageId"));
        this.navbarService.getNavbarItems(languageId).subscribe({
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
        this.languagesDefault = language; // Seçilen dili set et
        localStorage.setItem("languageId", language.id);
        this.sharedService.setLang(language);
        window.location.reload();
    }
}
