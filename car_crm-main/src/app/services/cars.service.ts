import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICar } from '../models/ICar';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  subject: Subject<any> = new Subject<any>();

  constructor(private _httpClient: HttpClient) {}

  getAllCars(): Observable<any> {
    return this._httpClient.get(environment.pathToServer);
  }

  createNewCar(data: ICar): Observable<any> {
    return this._httpClient.post(environment.pathToServer, data);
  }

  deleteCarById(id: number): Observable<any> {
    return this._httpClient.delete(environment.pathToServer + id);
  }

  updateCarById(id: number, data: any): Observable<any> {
    return this._httpClient.put(environment.pathToServer + id, data);
  }
}
