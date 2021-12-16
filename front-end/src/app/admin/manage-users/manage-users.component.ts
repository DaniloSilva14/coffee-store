import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/manageAdmin/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'phone', 'email'];
  dataSource: User[] = [];

  constructor(
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(data => {
      this.dataSource = data
      console.log(this.dataSource);      
    });
  }
}
