import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogInterface } from './blog-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUtilizadores() {
    return ["Aline", "Everton", "Antonio"];
  }


  getPosts(): Observable<BlogInterface[]> {
    return this.http.get<BlogInterface[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
