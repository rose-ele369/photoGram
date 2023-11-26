// unsplash.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.scss']
})
export class UnsplashComponent {

}


/*import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../Services/Unsplash/unsplash.service'

@Component({
  selector: 'app-unsplash',
  template: `
    <div>
      <h2>Imágenes de Unsplash</h2>
      <div *ngFor="let image of images">
        <img [src]="image.urls.thumb" alt="Imagen">
      </div>
    </div>
  `,
})
export class UnsplashComponent implements OnInit {
  images: any[] = [];

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit() {
    this.unsplashService.getImages('dog').subscribe(
      (images: any[]) => {
        this.images = images;
      },
      (error: any) => {
        console.error('Error fetching images:', error);
      }
    );
  }
}*/

