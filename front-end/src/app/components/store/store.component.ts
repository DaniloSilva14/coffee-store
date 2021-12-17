import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service';
import { DialogChooseProductComponent } from '../dialog-choose-product/dialog-choose-product.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  produtos: Product[] = [];

  constructor(
    public dialog: MatDialog, 
    private prodService: ProductsService
  ) { }

  ngOnInit(): void {
    this.prodService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  toKart(product: Product): void {    
    const dialogRef = this.dialog.open(DialogChooseProductComponent, {
      width: '400px',
      data: product,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.prodService.getProdutos().subscribe(data => {
        this.produtos = data;
      });
    });    
  }
}
