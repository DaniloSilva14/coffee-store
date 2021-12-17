import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  typeUser: String | null = 'user';
  nameUser: String | null = '';
  logado: Boolean = false;
  
  constructor(
    private tokenService: TokenService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.isAdmin();
    if(this.tokenService.hasToken()){
      this.logado = true;
      this.typeUser = this.tokenService.getUserRoles(); 
      this.nameUser = this.tokenService.getUserName(); 
    }      
  }

  isAdmin() {
    if (this.tokenService.isAdmin())
      this.route.navigate(['admin']);
  }

  logout() {
    console.log('logout');    
    this.tokenService.removeToken()
    this.route.navigateByUrl('/login');
  }

}
