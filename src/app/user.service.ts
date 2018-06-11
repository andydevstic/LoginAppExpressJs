import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  register(data): Observable<any> {
    return this.http.post(this.registerURL, data); 
  }
}
