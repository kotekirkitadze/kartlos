import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ApiService } from 'src/app/services/api.service';
import { ApiResponse, Order, Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<any> | undefined;

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.products$ = this.apiService.getProducts().pipe(
      map((e: ApiResponse) =>
        e.result.map((e: Product) => {
          return {
            ...e,
            descriptionGeo: e.descriptionGeo.split(/• /).slice(1),
          };
        })
      )
    );
  }

  buyHandler(_: any, product: Product) {
    this.openDialog(product.id);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: { id },
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((payload) => {
      if (payload) {
        this.postProduct(payload);
      }
    });
  }

  postProduct({ formValue, productId }: { formValue: any; productId: number }) {
    const data: Order = {
      addresInfo: {
        countryId: 1,
        city: formValue.city,
        state: 'state',
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        address1: formValue.address,
        address2: 'address2',
        phone: formValue.phone,
        email: formValue.email,
        postalCode: 'postalCode',
      },
      orders: [
        {
          productId,
          quantity: 1,
        },
      ],

      shippingId: 1,
      currencyId: 1,
    };
    this.apiService.postProduct(data).subscribe((e) => {
      console.log(e);
    });
  }
}
