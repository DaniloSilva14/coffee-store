import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/manageAdmin/user';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-alter-user',
  templateUrl: './dialog-alter-user.component.html',
  styleUrls: ['./dialog-alter-user.component.scss']
})
export class DialogAlterUserComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogAlterUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      _id: [this.data._id, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      address: [this.data.address, [Validators.required]],
      phone: [this.data.phone, [Validators.required]],
      email: [this.data.email, [Validators.required]],
      password: [''],
      roles: [this.data.roles, [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.adminService.alterarUser(this.userForm.value as User)
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
