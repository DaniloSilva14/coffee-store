import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { UserInfoToken } from 'src/app/models/user/user-info-token';
import { NewUser } from 'src/app/models/user/new-user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_Login: string = 'http://localhost:3000/customers';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(usuario: string, senha: string) {
    return this.http
      .post(
        `${this.API_Login}/authenticate`,
        { email: usuario, password: senha },
        { observe: 'response' }
      )
      .pipe(map((res) => {
        if (res.body) {
          this.tokenService.setUserInfo(res.body as UserInfoToken);
          console.log(res.body);          
        }
      }));
  }

  signup(newUser: NewUser) {
    return this.http.post(
      `${this.API_Login}/CreateLogin`, newUser
    );
  }
}
