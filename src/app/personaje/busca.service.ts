import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

const JASONURL: string = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})

export class BuscaService {
  
  personajes: any = [];
    
  constructor(private http: HttpClient) {  }

  getTodos() { return this.http.get(JASONURL) } 

}
