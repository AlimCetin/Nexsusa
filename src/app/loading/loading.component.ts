import { Component, Input } from '@angular/core';
import { LoadingService } from '../services/loading/loading.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading = false;

  constructor(private loadingService: LoadingService) {
    // Servisten gelen isLoading durumunu dinliyoruz
    this.loadingService.isLoading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
