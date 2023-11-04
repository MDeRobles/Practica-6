import { Injectable } from '@angular/core';
import { Login } from '../models/login.models';

@Injectable({
  providedIn: 'root'
})
export class UsuersService {

  private users: Login[]=[];
  

  constructor() {

    this.users.push({
      user: "mderobles",
      password: "12345"
    });
    this.users.push({
        user: "iramirez",
        password: "12345"
    });
    this.users.push({
        user: "miisderoblesra",
        password: "12345"
      });
  
   }
   
   // Agrega un método para autenticar al usuario
  authenticate(username: string, password: string): boolean {
    const user = this.users.find(u => u.user === username && u.password === password);
    return user !== undefined;
  }

}