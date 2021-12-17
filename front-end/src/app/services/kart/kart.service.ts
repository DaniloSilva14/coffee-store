import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KartItem } from 'src/app/models/kart/kart-item';

@Injectable({
  providedIn: 'root'
})
export class KartService {

  kart: KartItem[] = []

  constructor(
    private http: HttpClient
  ) { }

  sendToKart(item: KartItem) {
    console.log(item);   
    this.kart.push(item);
    console.log(this.kart);   
  }

}
