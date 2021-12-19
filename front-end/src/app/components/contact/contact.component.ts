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
    console.log( " " );    
    console.log( "Email enviado de", this.contactForm.get('email')?.value);
    console.log( " ---------- " );
    console.log( "Olá ", this.contactForm.get('name')?.value);
    console.log( "Recebemos a mensagem: ", this.contactForm.get('message')?.value);
    console.log( "Agradecemos o contato! " );
    console.log( " ---------- " );
    
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
