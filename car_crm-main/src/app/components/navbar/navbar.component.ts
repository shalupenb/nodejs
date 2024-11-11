import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private _dialog: MatDialog) {}
  addCar(): void {
    this._dialog.open(FormAddCarComponent);
  }
}
