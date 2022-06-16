import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(private http: HttpClient) { }

  testService() {
    return this.http.get<Test>('http://localhost:8080/api/v1/greeting');
  }
}
