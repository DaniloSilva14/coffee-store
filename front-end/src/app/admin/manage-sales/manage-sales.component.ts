import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-manage-sales',
  templateUrl: './manage-sales.component.html',
  styleUrls: ['./manage-sales.component.scss']
})
export class ManageSalesComponent implements OnInit {
  
  columHead: string[] = ['Nome', 'Preço', 'Qtd (estoque)', 'Vendidos'];
  dataSource: Product[] = [];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProdutos().subscribe(data => this.dataSource = data );
  }
}
