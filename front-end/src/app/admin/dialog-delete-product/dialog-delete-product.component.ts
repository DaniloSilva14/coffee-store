import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-delete-product',
  templateUrl: './dialog-delete-product.component.html',
  styleUrls: ['./dialog-delete-product.component.scss']
})
export class DialogDeleteProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private productService: ProductsService,
  ) {}

  ngOnInit() { }  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.productService.deleteProdutos(this.data)
      .subscribe(res =>  {
        Swal.fire({
          icon: 'success',
          title: 'Exclusão concluida'      
        }).then(() => {
          this.dialogRef.close();  
        })
      })    
  }
}
