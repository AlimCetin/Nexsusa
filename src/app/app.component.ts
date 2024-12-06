import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { LoadingService } from './services/loading/loading.service';
import { Observable, Subscription } from 'rxjs';
import { SharedService } from './services/shared.service';
import { LanguageService } from './services/language/language.service';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  location: string = '';
  routerSubscription: Subscription;
  isLoading=false;

    constructor(
        private router: Router,
        private sharedService: SharedService,
        private languageService: LanguageService,
    ) {}

    ngOnInit(){
        this.recallJsFuntions();
       /*  this.sharedService.getLanguages().then((response :any) => {
            const languageId = response.data.find((x: { isDefault: any; }) => x.isDefault).id;
            localStorage.setItem("languageId", languageId);
            console.log("LanguageId:", languageId);
        }); */
        this.languageService.initializeLanguage();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
  constructor(
    private router: Router,
    private loadingService: LoadingService
  ) {this.loadingService.isLoading$.subscribe((loading) => {
    this.isLoading = loading;
  });}

  ngOnInit(): void {
   

    this.recallJsFunctions();
  }

  ngOnDestroy(): void {
    // Bileşen yok edilirken, routerSubscription'ı temizlemek
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Sayfa geçişlerinde scroll'u sıfırlama işlemi
  recallJsFunctions(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.location = this.router.url;
          window.scrollTo(0, 0); // Sayfayı en üst kısma kaydırma
        }
      });
  }
}
