import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  getUser(data:any): Observable<any> {
    return this._httpClient.get(`${environment.pathToUsers}
    ?pwd=${data.pwd}`);
    ///?title=json-server&author=typicode
  }
}
