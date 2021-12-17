import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogChooseProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private kartService: KartService,
  ) {}

  ngOnInit(): void { 
    this.kartForm = this.formBuilder.group({
      idProduct: [this.data._id, [Validators.required]],
      qtd:['', [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if(!this.kartForm.valid) return;
    
    this.kartService.sendToKart(this.kartForm.value as KartItem);
    this.dialogRef.close();
  }

}
