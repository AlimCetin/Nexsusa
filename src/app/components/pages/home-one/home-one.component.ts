import { LoadingService } from "./../../../services/loading/loading.service";
import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { HomeService } from "../../../services/home/home.service";
import { SharedService } from "../../../services/shared.service";
import { environment } from "src/environments/environment";


@Component({
    selector: "app-home-one",
    templateUrl: "./home-one.component.html",
    styleUrls: ["./home-one.component.scss"],
})
export class HomeOneComponent implements OnInit {
    constructor(
        private homeService: HomeService,
        private sharedService: SharedService,
        private loadingService: LoadingService
    ) {}
    // Dynamic data for the banner section
    bannerData: any = {};

    ServicesData: any = {};
    companyData: any = {};

    chooseData: any = {};

    processData: any = {};

    caseData: any = {};

    featureData: any = {};

    teamData: any = {};

    testimonialData: any = {};

    blogData: any = {};

    contactData: any = {};

    imagesUrl = environment.imagesUrl;
    ngOnInit() {
        this.handleLoading();
      }
      
       handleLoading() {
        try {
          this.loadingService.show(); // Loader'ı başlat
           this.getHomePageData(); // HomePage verisi yüklenene kadar bekle
           this.getContact(); // Contact verisi yüklenene kadar bekle

        } catch (error) {
          console.error("Veri yüklenirken hata oluştu:", error);
        } finally {
            setTimeout(() => {
                this.loadingService.hide();
            }, 3000);
        }
      }


    getContact()  {
        const languageId = Number(localStorage.getItem("languageId"));
        this.homeService.getContact(languageId).subscribe({
            next: (response) => {
                console.log("Contact Data:", response);
                if (response.statusCode == 200) {
                    this.contactData = response.data;
                }
            },
            error: (err) => {
                console.error("Contact verisi alınamadı:", err);
            },
        });
    }

    getHomePageData() {
        const languageId = Number(localStorage.getItem("languageId"));
        this.homeService.getHomePage(languageId).subscribe({
            next: (response) => {
                console.log("HomePage Data:", response);
                if (response.statusCode == 200) {
                    this.sharedService.setNavbarInfo(
                        response.data.homePageInfo
                    );
                    this.sharedService.setNavbar(response.data.navBarItems);
                    this.bannerData = response.data.slider;
                    this.ServicesData = response.data.services;
                    this.companyData = response.data.ourCompany;
                    this.chooseData = response.data.chooseUs;
                    this.processData = response.data.workingProcess;
                    this.caseData = response.data.workShowCase;
                    this.featureData = response.data.whoWeAre;
                    this.teamData = response.data.ourEmployees;
                    this.testimonialData = response.data.clientSays;
                    this.blogData = response.data.regularBlogs;
                    this.sharedService.setFooter(response.data.footer);
                    this.sharedService.setFooterService(response.data.services);
                }
            },
            error: (err) => {
                console.error("HomePage verisi alınamadı:", err);
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
