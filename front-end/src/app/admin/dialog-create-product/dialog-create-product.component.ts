import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-dialog-create-product',
  templateUrl: './dialog-create-product.component.html',
  styleUrls: ['./dialog-create-product.component.scss']
})
export class DialogCreateProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogCreateProductComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      _id: ['0', [Validators.required]],
      title: ['', [Validators.required]],
      slug: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      qtd: ['', [Validators.required]],
      sold: ['0', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.productService.criarProdutos(this.productForm.value as Product)
      .subscribe(res => this.dialogRef.close() )    
  }
}