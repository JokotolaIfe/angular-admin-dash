import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { SharedService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
    public shared: SharedService
  ) { }

  getData(): Observable<any>{
      return this.http
        .get<any>(
          `${environment.baseUrl}`,
          {
            headers: new HttpHeaders({
              "Content-Type": "application/json",
              Accept: "application/json"
            })
          }
        )
        .pipe(
          catchError(err => {
            return this.shared.handleGenericError(err);
          })
        );
  }
}
