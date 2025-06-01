import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IUser{
  id: number;
  name: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { 
    
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/users');
  }
  createUser(user: Omit<IUser, 'id'>): Observable<IUser> {
    return this.http.post<IUser>('/api/users', user);
  }
}
