import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<any> | undefined;
  showPopup = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.products$ = this.http
      .get('https://kartlos-api.azurewebsites.net/api/products')
      .pipe(
        map((e: any) =>
          e.result.map((e: any) => {
            return {
              ...e,
              descriptionGeo: e.descriptionGeo.split(/• /).slice(1),
            };
          })
        )
      );
  }

  buyHandler(_: any, product: any) {
    console.log('buy', product);
    this.showPopup = true;
  }
}
