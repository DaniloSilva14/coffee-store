import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KartItem } from 'src/app/models/kart/kart-item';
import { KartService } from 'src/app/services/kart/kart.service';
import { TokenService } from 'src/app/services/token/token.service';
import { DialogDeleteChooseProductComponent } from '../dialog-delete-choose-product/dialog-delete-choose-product.component';
import { DialogFinalizeComponent } from '../dialog-finalize/dialog-finalize.component';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss']
})
export class KartComponent implements OnInit {

  columHead: string[] = ['Nome', 'Quantidade', 'Preço', 'Opções'];
  dataSource: KartItem[] = [];
  total: number = 0;

  constructor(
    public dialog: MatDialog, 
    private kartService: KartService,
    private tokenService: TokenService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.dataSource = this.kartService.getKart();
    this.calculateTotal();
  }

  calculateTotal() {
    let parcialPrice = 0;
    this.total = 0;
    this.dataSource.forEach(p => {
      parcialPrice = Number(p.price) * Number(p.qtdKart)
      this.total = Number(this.total) + Number(parcialPrice);
    })
  }

  finalizeBuy(): void {
    if(!this.tokenService.hasToken()){
      alert('Faça o login para concluir compra');
      this.route.navigateByUrl('/login');
    }else{
      const dialogRef = this.dialog.open(DialogFinalizeComponent, {
        width: '400px',
        data: this.dataSource,
      });
    }  
  }

  toDelete(id: string): void {
    const dialogRef = this.dialog.open(DialogDeleteChooseProductComponent, {
      width: '250px',
      data: id,
    });

    dialogRef.afterClosed().subscribe(()=> {
      this.dataSource = this.kartService.getKart();
      this.calculateTotal();
    } );    
  }
}