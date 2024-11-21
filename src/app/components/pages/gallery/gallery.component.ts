import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  gallery = [
    { id: 1, imageClass: 'bg-1' },
    { id: 2, imageClass: 'bg-2' },
    { id: 3, imageClass: 'bg-3' },
    { id: 4, imageClass: 'bg-4' },
    { id: 5, imageClass: 'bg-5', large: true },
  ];
  ngOnInit(): void {
  }

}
