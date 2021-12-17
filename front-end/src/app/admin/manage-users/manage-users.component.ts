import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/manageAdmin/user';
import { AdminService } from 'src/app/services/admin/admin.service';
import { DialogAlterUserComponent } from '../dialog-alter-user/dialog-alter-user.component';
import { DialogCreateUserComponent } from '../dialog-create-user/dialog-create-user.component';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  columHead: string[] = ['Nome', 'Endereço', 'Telefone', 'Email', 'Opções'];
  dataSource: User[] = [];

  constructor(
    public dialog: MatDialog, 
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(data => this.dataSource = data );
  }

  toEdit(item: User): void {    
    const dialogRef = this.dialog.open(DialogAlterUserComponent, {
      width: '400px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => 
      this.adminService.getUsers()
        .subscribe(data => this.dataSource = data)
    );    
  }

  toDelete(id: Number): void {
    const dialogRef = this.dialog.open(DialogDeleteUserComponent, {
      width: '250px',
      data: id,
    });

    dialogRef.afterClosed().subscribe(() => 
      this.adminService.getUsers()
      .subscribe(data => this.dataSource = data)
    );    
  }

  toCreate(): void {
    const dialogRef = this.dialog.open(DialogCreateUserComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(()=> 
      this.adminService.getUsers()
        .subscribe(data => this.dataSource = data)
    );    
  }
}