import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KartItem } from 'src/app/models/kart/kart-item';
import { KartService } from 'src/app/services/kart/kart.service';
import Swal from 'sweetalert2'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog-finalize',
  templateUrl: './dialog-finalize.component.html',
  styleUrls: ['./dialog-finalize.component.scss']
})
export class DialogFinalizeComponent implements OnInit {

  finalizeForm: FormGroup = new FormGroup({});
  matcher = new MyErrorStateMatcher();
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
    if(!this.finalizeForm.valid) return;
    
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