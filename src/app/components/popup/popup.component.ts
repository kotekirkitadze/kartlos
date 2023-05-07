import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    setTimeout(() => {
      this.form.valueChanges.subscribe(console.log);
    }, 300);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
