import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: any;
  @Output() onBuy = new EventEmitter<void>();

  buy() {
    this.onBuy.emit();
  }
}
