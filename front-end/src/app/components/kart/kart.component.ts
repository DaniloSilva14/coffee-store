import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KartItem } from 'src/app/models/kart/kart-item';
import { KartService } from 'src/app/services/kart/kart.service';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataSource = this.kartService.getKart();
    this.calculateTotal();
  }

  calculateTotal() {
    let parcialPrice = 0;
    this.dataSource.forEach(p => {
      parcialPrice = Number(p.price) * Number(p.qtdKart)
      this.total = Number(this.total) + Number(parcialPrice);
    })
  }

  finalizeBuy(): void {
    const dialogRef = this.dialog.open(DialogFinalizeComponent, {
      width: '400px',
      data: this.dataSource,
    });

    // dialogRef.afterClosed().subscribe(()=> 
    //   this.productService.getProdutos()
    //     .subscribe(data => this.dataSource = data)
    // );    
  }

  // toDelete(id: number): void {
  //   const dialogRef = this.dialog.open(DialogDeleteProductComponent, {
  //     width: '250px',
  //     data: id,
  //   });

  //   dialogRef.afterClosed().subscribe(()=> 
  //     this.productService.getProdutos()
  //       .subscribe(data => this.dataSource = data)
  //   );    
  // }
  
}