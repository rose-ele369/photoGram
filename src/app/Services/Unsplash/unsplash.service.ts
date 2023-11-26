// unsplash.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private accessKey = '-HiZk6cVFV7BPlO3QO4A4MTf-VWWubbRLL3zGcpFEgw'; // Reemplaza con tu clave de acceso de Unsplash

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any> {
    const url = `https://api.unsplash.com/photos/random?count=5&client_id=${this.accessKey}`;
    return this.http.get(url);
  }
}


/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UnsplashService {
  getImages(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}*/
