import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class APIService {
    constructor(private httpClient: HttpClient) {

    }
    requestToServer(address: string): Observable<any> {
        return this.httpClient.get(`${address}/api`);
    }
}