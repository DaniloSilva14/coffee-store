import { Injectable } from '@angular/core';
import { UserInfoToken } from 'src/app/models/user/user-info-token';

const KEY_TOKEN = 'token';
const KEY_USERNAME = 'username';

@Injectable({ providedIn: 'root' })
export class TokenService {

  hasToken() {
    return !!this.getToken();
  }

  setUserInfo(userInfo: UserInfoToken) {
    this.setToken(userInfo.token);
    this.setUserName(userInfo.userName);
  }

  getUserInfo() {
    const token = this.getToken();
    const userName = this.getUserName();
    if (token && userName)
      return { userName, token } as UserInfoToken;
    return null;
  }

  getToken() {
    return localStorage.getItem(KEY_TOKEN);
  }

  getUserName() {
    return localStorage.getItem(KEY_USERNAME);
  }

  removeToken() {
    localStorage.removeItem(KEY_TOKEN);
    localStorage.removeItem(KEY_USERNAME);
  }

  private setToken(token: string) {
    localStorage.setItem(KEY_TOKEN, token);
  }

  private setUserName(userName: string) {
    window.localStorage.setItem(KEY_USERNAME, userName);
  }
}
