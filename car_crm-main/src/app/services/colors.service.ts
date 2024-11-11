import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IColor } from '../models/IColor';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor(private _httpClient: HttpClient) {}

  getAllColors(): Observable<any> {
    return this._httpClient.get(environment.pathToColors);
  }
}
