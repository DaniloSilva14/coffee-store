import { TokenService } from 'src/app/services/token/token.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanLoad {


  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (!this.tokenService.hasToken()) {
      this.router.navigate(['finalize-compra']);
      return false;
    }
    return true;
  }
}
