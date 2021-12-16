import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() { }

  navigationToManageUsers() {
    this.router.navigateByUrl('admin/manage-users');
  };

  navigationToManageAdmins() {
    this.router.navigateByUrl('admin/manage-admins');
  };

  navigationToManageProducts() {
    this.router.navigateByUrl('admin/manage-products');
  };

  navigationToManageSales() {
    this.router.navigateByUrl('admin/manage-sales');
  };
}
