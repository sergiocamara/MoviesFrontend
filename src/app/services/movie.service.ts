import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://localhost:55137/api/Movies';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByTitle(Title): Observable<any> {
    return this.httpClient.get(`${baseURL}/Search/${Title}`);
  }

}
