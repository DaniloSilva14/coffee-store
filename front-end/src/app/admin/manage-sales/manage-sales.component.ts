import { Component, OnInit } from '@angular/core';
import { OrderComplete } from 'src/app/models/order/order-complete';
import { Product } from 'src/app/models/product/product';
import { KartService } from 'src/app/services/kart/kart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-manage-sales',
  templateUrl: './manage-sales.component.html',
  styleUrls: ['./manage-sales.component.scss']
})
export class ManageSalesComponent implements OnInit {
  
  columHead: string[] = [];
  dataSource_1: Product[] = [];
  dataSource_2: OrderComplete[] = []
  opcao:number = 1;

  constructor(
    private productService: ProductsService,
    private kartService: KartService
  ) { }

  ngOnInit(): void {
    this.visualizaRelatorio();
  }

  visualizaOrders(){    
    this.opcao = 1;
    this.columHead = ['Id order', 'Status'];
    this.kartService.getOrders().subscribe(data => {
      this.dataSource_2 = data
      console.log(data); 
      console.log(this.dataSource_2);           
    } );
  }

  visualizaRelatorio(){
    this.opcao = 0;
    this.columHead = ['Nome', 'Preço', 'Qtd (estoque)', 'Vendidos'];
    this.productService.getProdutos().subscribe(data => this.dataSource_1 = data );
  }

  changeStatus(item: OrderComplete){
    this.dataSource_2.forEach(order => {
      if(order.number == item.number){
        if(order.status == 'done')
          order.status = 'created'
        else 
          order.status = 'done'
      }
    })
    // TODO salvar banco    
    this.kartService.changeStatusOrder(item._id).subscribe(res => {
      console.log(res);
    });
  }
}
