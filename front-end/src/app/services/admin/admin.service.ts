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

  changePermission(id: string){ 
    return this.http.request('POST', 'http://localhost:3000/customers/change-permission', { body: { "id": id } })
  }

  alterarUser(user: User) {    
    return this.http.request('put', `http://localhost:3000/customers/${user._id}`, {
      body: {
        "name": user.name,
        "address": user.address,
        "phone": user.phone,
        "email": user.email,
        "password": user.password
      }
    })
  }

  deleteUser(id: string) {
    return this.http.request('delete', 'http://localhost:3000/customers', { body: { "id": id } })
  }

  criarUser(user: User) {
    return this.http.request('post', 'http://localhost:3000/customers', {
      body: {
        "name": user.name,
        "address": user.address,
        "phone": user.phone,
        "email": user.email,
        "password": user.password
      }
    })
  }
}
