import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service';
import { MatDialog } from "@angular/material/dialog";
import { DialogDeleteProductComponent } from '../dialog-delete-product/dialog-delete-product.component';
import { DialogAlterProductComponent } from '../dialog-alter-product/dialog-alter-product.component';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  columHead: string[] = ['Nome', 'Descrição', 'Preço', 'Estoque', 'Opções'];
  dataSource: Product[] = [];

  constructor(
    public dialog: MatDialog, 
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProdutos().subscribe(data => {
      this.dataSource = data
      console.log(this.dataSource);
    });
  }

  toEdit(item: Product): void {
    console.log('Edit');
    console.log(item);

    const dialogRef = this.dialog.open(DialogAlterProductComponent, {
      width: '400px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(()=> 
      this.productService.getProdutos()
        .subscribe(data => this.dataSource = data)
    );    
  }

  toDelete(id: Number): void {
    console.log('Delete');
    console.log(id);

    const dialogRef = this.dialog.open(DialogDeleteProductComponent, {
      width: '250px',
      data: id,
    });

    dialogRef.afterClosed().subscribe(()=> 
      this.productService.getProdutos()
        .subscribe(data => this.dataSource = data)
    );    
  }
}