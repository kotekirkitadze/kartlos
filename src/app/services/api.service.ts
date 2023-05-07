import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse, Order } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ApiResponse>(`${environment.baseApi}/products`);
  }

  postProduct(data: Order) {
    return this.http.post(`${environment.baseApi}/orders`, data);
  }
}
