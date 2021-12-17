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
  logado: Boolean = false;
  
  constructor(
    private tokenService: TokenService,
    private route: Router
  ) { }

  ngOnInit(): void {
    if(this.tokenService.hasToken()){
      this.logado = true;
      if(this.tokenService.getUserRoles())
        this.typeUser = this.tokenService.getUserRoles(); 
    }      
  }

  logout() {
    console.log('logout');    
    this.tokenService.removeToken()
    this.route.navigateByUrl('/login');
  }

}
