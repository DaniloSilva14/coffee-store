import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/manageAdmin/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.scss']
})
export class ManageAdminsComponent implements OnInit {

  columHead: string[] = ['Nome', 'Email', 'Cargo'];
  dataSource: User[] = [];

  constructor(
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(data => this.dataSource = data);
  }

  changeRole(user: User) {
    if(user.roles == 'admin') 
      user.roles = 'user' 
    else 
      user.roles = 'admin' 
 
    this.adminService.changePermission(user._id);
  }
}
