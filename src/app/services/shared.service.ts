import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Veri paylaşımı için BehaviorSubject
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  // Yeni veri ayarlama metodu
  setData(data: any): void {
    this.dataSource.next(data);
  }
}
