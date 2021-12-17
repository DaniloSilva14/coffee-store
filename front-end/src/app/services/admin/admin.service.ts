import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/manageAdmin/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get<User[]>('http://localhost:3000/customers')
  }

  changePermission(id: Number){ 
    return this.http.request('POST', 'http://localhost:3000/customers/change-permission', { body: { "id": id } })
  }
}
