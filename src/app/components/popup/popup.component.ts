import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  visible = false;

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
