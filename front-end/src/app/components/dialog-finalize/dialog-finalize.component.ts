import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KartItem } from 'src/app/models/kart/kart-item';
import { KartService } from 'src/app/services/kart/kart.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dialog-finalize',
  templateUrl: './dialog-finalize.component.html',
  styleUrls: ['./dialog-finalize.component.scss']
})
export class DialogFinalizeComponent implements OnInit {

  finalizeForm: FormGroup = new FormGroup({});
  total = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private kartService: KartService,
    public dialogRef: MatDialogRef<DialogFinalizeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: KartItem[],
  ) {}

  ngOnInit(): void {
    this.finalizeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      creditCard: ['', [Validators.required]],
      value: [this.total, [Validators.required]],
    });
    this.calculateTotal();
  }

  calculateTotal() {
    let parcialPrice = 0;
    this.data.forEach(p => {
      parcialPrice = Number(p.price) * Number(p.qtdKart)
      this.total = Number(this.total) + Number(parcialPrice);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    console.log("Compra finalizada");
    console.log(this.finalizeForm.value);
    this.kartService.createOrder(this.data).subscribe(res => {      
      Swal.fire({
        icon: 'success',
        title: 'Transação concluida',
        text: 'Obrigado pela compra',        
      }).then(() => {
        this.kartService.cleanKart(); 
        this.dialogRef.close();
        this.route.navigateByUrl(''); 
      })
    })  
  }
}