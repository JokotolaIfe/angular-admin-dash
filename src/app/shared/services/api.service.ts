import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  constructor(private http: HttpClient) {}

  handleGenericError(error) {
    console.error(error);
    return throwError(error);
  }
}
