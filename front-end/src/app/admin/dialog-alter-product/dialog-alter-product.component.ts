import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-alter-product',
  templateUrl: './dialog-alter-product.component.html',
  styleUrls: ['./dialog-alter-product.component.scss']
})
export class DialogAlterProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogAlterProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      _id: [this.data._id, [Validators.required]],
      title: [this.data.title, [Validators.required]],
      slug: [this.data.slug, [Validators.required]],
      description: [this.data.description, [Validators.required]],
      price: [this.data.price, [Validators.required]],
      qtd: [this.data.qtd, [Validators.required]],
      sold: [this.data.sold, [Validators.required]],
      image: [this.data.image, [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if(!this.productForm.valid) return;
    
    this.productService.alterarProdutos(this.productForm.value as Product)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Alteração concluida'      
        }).then(() => {
          this.dialogRef.close();  
        })
      })         
  }
}
