import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<any> | undefined;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

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
    this.openDialog(product.id);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: { id },
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
