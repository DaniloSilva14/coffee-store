import { Injectable } from '@angular/core';
import { UserInfoToken } from 'src/app/models/user/user-info-token';

const KEY_TOKEN = 'token';
const KEY_USERNAME = 'username';
const KEY_ROLES = 'roles';

@Injectable({ providedIn: 'root' })
export class TokenService {

  hasToken() {
    return !!this.getToken();
  }

  setUserInfo(userInfo: UserInfoToken) {
    this.setToken(userInfo.token);
    this.setUserName(userInfo.userName);
    this.setUserRoles(userInfo.userRoles);
  }

  getUserInfo() {
    const token = this.getToken();
    const userName = this.getUserName();
    const userRoles = this.getUserRoles();
    if (token && userName && userRoles)
      return { token, userName,  userRoles } as UserInfoToken;
    return null;
  }

  getToken() {
    return localStorage.getItem(KEY_TOKEN);
  }

  getUserName() {
    return localStorage.getItem(KEY_USERNAME);
  }

  getUserRoles() {
    return localStorage.getItem(KEY_ROLES);
  }

  isAdmin() {
    if (this.hasToken() && this.getUserRoles() == 'admin') {
      return true
    }
    return false
  }

  removeToken() {
    localStorage.removeItem(KEY_TOKEN);
    localStorage.removeItem(KEY_USERNAME);
    localStorage.removeItem(KEY_ROLES);
  }

  private setToken(token: string) {
    localStorage.setItem(KEY_TOKEN, token);
  }

  private setUserName(userName: string) {
    window.localStorage.setItem(KEY_USERNAME, userName);
  }

  private setUserRoles(userRoles: string) {
    window.localStorage.setItem(KEY_ROLES, userRoles);
  }
}
