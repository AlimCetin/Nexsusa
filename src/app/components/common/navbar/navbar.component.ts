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
        private sharedService: SharedService
    ) {
        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         this.location = this.router.url;
        //         if (this.location == "/home-three") {
        //             this.navbarClass = "navbar-area three";
        //         } else {
        //             this.navbarClass = "navbar-area";
        //         }
        //     }
        // });
    }

    ngOnInit(): void {
        this.init();

        this.sharedService.navbarData$.subscribe((navData) => {
            this.homePageInfo = navData;
        });
    }
    async init() {
        // this.getLanguageService();
        this.setLanguage();
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
    setLanguage() {
        this.sharedService.lang$.subscribe((langData) => {
            console.log("LangData:", langData);
            this.language = langData;
        });
    }

    selectLanguage(language: any): void {
        this.languagesDefault = language; // Seçilen dili set et
        this.sharedService.setLang(language);
    }
}
