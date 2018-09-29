import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiEndpoint}/users`);
  }

  getById(id: number) {
    return this.http.get(`${environment.apiEndpoint}/users/` + id);
  }

  register(user: User) {
    return this.http.post(`${environment.apiEndpoint}/users/register`, user);
  }

  update(user: User) {
    return this.http.put(`${environment.apiEndpoint}/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiEndpoint}/users/` + id);
  }
}
