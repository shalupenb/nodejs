import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColorsService } from 'src/app/services/colors.service';
import { TypesService } from 'src/app/services/types.service';
import { IColor } from 'src/app/models/IColor';
import { IType } from 'src/app/models/IType';
@Component({
  selector: 'app-form-add-car',
  templateUrl: './form-add-car.component.html',
  styleUrls: ['./form-add-car.component.scss'],
})
export class FormAddCarComponent implements OnInit {
  carForm!: FormGroup;
  colors: Array<IColor> = [];
  types: Array<IType> = [];
  constructor(
    private _fb: FormBuilder,
    private _carService: CarsService,
    private _colorService: ColorsService,
    private _typeService: TypesService,
    private _window: DialogRef<FormAddCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  getAllColors(): void {
    this._colorService.getAllColors().subscribe({
      next: (data) => {
        this.colors.push(...data);
      },
      error: (err) => console.log(err),
    });
  }
  getAllTypes(): void {
    this._typeService.getAllTypes().subscribe({
      next: (data) => {
        this.types.push(...data);
      },
      error: (err) => console.log(err),
    });
  }
  ngOnInit(): void {
    this.getAllColors();
    this.getAllTypes();

    this.carForm = this._fb.group({
      model: '',
      year: 0,
      number: '',
      color: '',
      type: '',
      isNew: 'true',
      vEngine: 0,
    });
    this.carForm.patchValue(this.data);
  }

  addCar(): void {
    if (this.carForm.valid) {
      if (this.data) {
        //update
        this._carService
          .updateCarById(this.data.id, this.carForm.value)
          .subscribe({
            next: () => {
              alert('success');
              this._window.close();
              this._carService.subject.next(this.carForm.value);
            },
            error: (err) => {
              console.log(err);
            },
          });
      } else {
        //create
        this._carService.createNewCar(this.carForm.value).subscribe({
          next: () => {
            alert('Success!');
            this._window.close();
            this._carService.subject.next(this.carForm.value);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    }
  }
}
