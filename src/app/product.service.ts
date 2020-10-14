import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import from rxjs/add/operator/map

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  

  constructor(private _http: Http) { }

  getAlbum(id: number){ 
    
    return this._http.get(_albumUrl).response.json();
   };

  
}
