import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  produtos: Product[] = [];

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit(): void {
    this.prodService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  compra(id: any) {
    let prod = this.produtos.find(p => p._id == id)
    console.log(prod);
  }
}
