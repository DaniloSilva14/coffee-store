import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  @Input()
  type: any;

  constructor(
    private tokenService: TokenService,
    private route: Router
  ) { }

  ngOnInit(): void {
    // fiz isso porque não utilizei modules
    // ainda não da pra usa o loadChildren e
    // consequentemente o canLoad (routeGuard)
    this.isAdmin();
  }

  isAdmin() {
    if (!this.tokenService.isAdmin())
      this.route.navigate(['']);
  }

  logout() {
    this.tokenService.removeToken()
    this.route.navigateByUrl('/login');
  }
  
}
