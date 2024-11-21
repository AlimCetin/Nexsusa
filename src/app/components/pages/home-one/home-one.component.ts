import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { title } from "process";
import { HomeService } from '../../../services/home/home.service';
import { SharedService } from '../../../services/shared.service';
import { LanguageService } from "../../../services/language/language.service";

@Component({
    selector: "app-home-one",
    templateUrl: "./home-one.component.html",
    styleUrls: ["./home-one.component.scss"],
})
export class HomeOneComponent implements OnInit {
    languages: any[] = [];
    languagesDefault: any = {};
    languageId: number = 1;
    homePageData: any;
   

    constructor(private homeService: HomeService,
        private languageService: LanguageService,
        private sharedService: SharedService
    ) {}
    // Dynamic data for the banner section
    bannerData: any={};

    ServicesData :any={};
    companyData : any ={};

    chooseData :any={};

    processData :any={};

    caseData :any={};

    featureData :any={};

    teamData:any={};

    testimonialData :any={};

    blogData :any={};

    contactData:any={};


    ngOnInit(): void {
        this.getLanguageService();
        this.getCurrentData();
        this.getHomePageData();
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


    getHomePageData(): void {
        this.homeService.getHomePage(this.languageId).subscribe({
          next: (response) => {
            console.log('HomePage Data:', response); // Veriyi kontrol etmek için
            if (response.statusCode==200) {
        
   this.bannerData=response.data.slider;
   this.ServicesData=response.data.services;
   this.companyData=response.data.ourCompany;
   this.chooseData=response.data.chooseUs;
   this.processData=response.data.workingProcess;
   this.caseData=response.data.workShowCase;
   this.featureData=response.data.whoWeAre;
   this.teamData=response.data.ourEmployees;
   this.testimonialData=response.data.clientSays;
   this.blogData=response.data.regularBlogs;


            }
            
          },
          error: (err) => {
            console.error('HomePage verisi alınamadı:', err);
          },
        });
      }

      getCurrentData(): void {
        this.sharedService.currentData.subscribe({
          next: (response) => {
            console.log('Navbar Verisi:', response);
            this.languageId = response.id; // Veriyi değişkene aktar
          },
          error: (err) => {
            console.error('Veri alınamadı:', err);
          },
        });
      }

    teamSlides: OwlOptions = {
        loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    };
    clientWrap: OwlOptions = {
        loop: true,
        margin: 30,
        nav: false,
        mouseDrag: true,
        items: 1,
        dots: false,
        autoHeight: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        center: false,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        },
    };
}
