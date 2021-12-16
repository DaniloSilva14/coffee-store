import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'price', 'qtd', 'image'];
  dataSource: Product[] = [];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProdutos().subscribe(data => {
      this.dataSource = data
      console.log(this.dataSource);      
    });
  }

}
