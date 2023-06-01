import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Stock} from "../model/Stock";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getStockData(symbol: string): Observable<Stock> {
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${this.apiKey}`;
    return this.http.get<Stock>(apiUrl);
  }
}
