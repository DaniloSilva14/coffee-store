import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private adminService: AdminService,
  ) {}

  ngOnInit() { }  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.adminService.deleteUser(this.data)
      .subscribe(res =>  {
        Swal.fire({
          icon: 'success',
          title: 'Exclusão concluida'      
        }).then(() => {
          this.dialogRef.close();  
        })
      } )    
  }
}
