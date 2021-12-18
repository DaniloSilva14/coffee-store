import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KartService } from 'src/app/services/kart/kart.service';

@Component({
  selector: 'app-dialog-delete-choose-product',
  templateUrl: './dialog-delete-choose-product.component.html',
  styleUrls: ['./dialog-delete-choose-product.component.scss']
})
export class DialogDeleteChooseProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteChooseProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private kartService: KartService,
  ) {}

  ngOnInit() { }  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.kartService.deleteProductKart(this.data);
    this.dialogRef.close() ;
  }
}
