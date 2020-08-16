import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  protected API_URL: string = 'api/products';

  constructor(private readonly httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getProducts(): Observable<Product[]> {    
    return this.httpClient.get<Product[]>(`${this.baseUrl}${this.API_URL}`);
  }
}
