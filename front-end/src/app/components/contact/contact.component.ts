import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required]],
      email: ['', Validators.required],
    });
  }

  sendContact(){
    if (!this.contactForm.valid) return;

    console.log( "Olá ",this.contactForm.get('name')?.value);

    Swal.fire({
      icon: 'success',
      title: 'Menssagem enviada',
      text: 'Funcionalidade ficticia (olha o console)',  
    }).then(() => {
      this.resetForm()
    })
  }

  resetForm(){
    this.contactForm.reset();
  }
}
