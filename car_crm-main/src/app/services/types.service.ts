import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor(private _httpClient: HttpClient) {}

  getAllTypes(): Observable<any> {
    return this._httpClient.get(environment.pathToTypes);
  }
}
