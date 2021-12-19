import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KartItem } from 'src/app/models/kart/kart-item';
import { Product } from 'src/app/models/product/product';
import { KartService } from 'src/app/services/kart/kart.service';

@Component({
  selector: 'app-dialog-choose-product',
  templateUrl: './dialog-choose-product.component.html',
  styleUrls: ['./dialog-choose-product.component.scss']
})
export class DialogChooseProductComponent implements OnInit {

  kartForm: FormGroup = new FormGroup({});
  qtdOfProducts : number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogChooseProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private kartService: KartService,
    private route: Router
  ) {}

  ngOnInit(): void { 
    this.populateQtdOfProducts();
    this.kartForm = this.formBuilder.group({
      _id: [this.data._id, [Validators.required]],
      title: [this.data.title, [Validators.required]],
      slug: [this.data.slug, [Validators.required]],
      description: [this.data.description, [Validators.required]],
      price: [this.data.price, [Validators.required]],
      qtdKart: ['', [Validators.required]],
      image: [this.data.image, [Validators.required]],
    });
  }

  onFinalizeClick(): void {
    if(!this.kartForm.valid) return;
    this.kartService.sendToKart(this.kartForm.value as KartItem);
    this.dialogRef.close();    
    this.route.navigate(['store/kart']);
  }

  onYesClick(): void {
    if(!this.kartForm.valid) return;
    
    this.kartService.sendToKart(this.kartForm.value as KartItem);
    this.dialogRef.close();
  }

  populateQtdOfProducts(){
    let i = 1;
    do {
      this.qtdOfProducts.push(i);
      i++;
    } while(i <= this.data.qtd);
  }
}
