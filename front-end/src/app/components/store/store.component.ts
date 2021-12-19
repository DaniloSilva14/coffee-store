import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KartItem } from 'src/app/models/kart/kart-item';
import { Product } from 'src/app/models/product/product';
import { KartService } from 'src/app/services/kart/kart.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { DialogChooseProductComponent } from '../dialog-choose-product/dialog-choose-product.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  produtos: Product[] = [];
  kartIsEmpty: boolean = true; 

  constructor(
    public dialog: MatDialog, 
    private prodService: ProductsService,
    private kartService: KartService
  ) { }

  ngOnInit(): void {
    this.prodService.getProdutos().subscribe(data => {
      this.produtos = data;
      this.qtdProdAtualizada();
      this.kartIsEmpty = this.conferenceKartIsEmpty();
    });
  }

  conferenceKartIsEmpty(){
    console.log(this.kartService.getKart().length == 0 );
    
    return this.kartService.getKart().length == 0 ? true : false;
  }

  toKart(product: Product): void {    
    const dialogRef = this.dialog.open(DialogChooseProductComponent, {
      width: '600px',
      data: product,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.prodService.getProdutos().subscribe(data => {
        this.produtos = data;
        this.qtdProdAtualizada();
      });
      this.kartIsEmpty = this.conferenceKartIsEmpty();
    });    
  }

  qtdProdAtualizada() {
    this.produtos.forEach(p => {
      let newProd = this.kartService.getProductKart(p._id) as KartItem;
      if(newProd) 
        p.qtd = p.qtd - newProd.qtdKart;
    })
  }
}
