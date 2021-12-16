import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // produtos: Product[] = [ {
  //   id: 1, nome: 'Cafe1', qtd: 30,  preco: 50.00,
  //   cor: 'red', imgURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
  // }, {
  //   id: 2, nome: 'Cafe2', qtd: 10, preco: 40.00, 
  //   cor: 'blue', imgURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png'
  // }, {
  //   id: 3, nome: 'Cafe3', qtd: 20, preco: 60.00,
  //   cor: 'green', imgURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'
  // }];
  //
  // getProdutos(){
  //   return this.produtos;
  // }

  getProdutos() {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  deleteProdutos(id: Number){
    return this.http.request('delete', 'http://localhost:3000/products', { body: {"id": id} })
  }
}
