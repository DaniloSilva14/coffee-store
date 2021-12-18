import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KartItem } from 'src/app/models/kart/kart-item';
import { Order } from 'src/app/models/order/order';
import { ItemOrder } from 'src/app/models/order/item-order';

@Injectable({
  providedIn: 'root'
})
export class KartService {

  kart: KartItem[] = []

  constructor(
    private http: HttpClient
  ) { }

  sendToKart(product: KartItem) {
    this.kart.forEach(p => {
      if(p._id == product._id) 
        p.qtdKart = Number(p.qtdKart) + Number(product.qtdKart);
    })
    
    if (!this.productExistInKart(product._id))
      this.kart.push(product);

    console.log(this.kart);   
  }

  getKart() {
    return  this.kart;
  }

  getProductKart(id: string) {
    return this.kart.find(p => p._id == id);
  }

  productExistInKart(id: string) {
    if (this.kart.find(p => p._id == id))
      return true
    else 
      return false
  }

  deleteProductKart(id: string) {
    this.kart = this.kart.filter(p => p._id != id);
  }

  confirmBuy(arrItemOrder: ItemOrder[]){  
    let order:Order = { items: arrItemOrder}  
    return this.http.post('http://localhost:3000/orders', order)
  }

  createOrder(oficialKart: KartItem[]){
    let arr:ItemOrder[] = [];
    oficialKart.forEach(p => {
      arr.push({quantity: p.qtdKart, price: p.price, product: p._id});
    })
    return this.confirmBuy(arr);
  }

  cleanKart(): void{
    this.kart = [];
  }
}
