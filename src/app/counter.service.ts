import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Counter } from './counter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialValue = [12, 6, 78];

  constructor(private httpClient: HttpClient) { }

  reset() {
    this.initialValue = [0, 0, 0];
  }

  //increment(position: number): number {
  //  this.initialValue[position]++;
  //  return this.initialValue[position];
  //}

  increment(): Observable<Counter>{
    //this.httpClient.patch<Counter>("https://lp4asgadot.herokuapp.com/counters/2.json",{"value" : 1});
    this.httpClient.patch("https://lp4asgadot.herokuapp.com/counters/43.json",{"value" : 1}).subscribe();
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/43.json");
  }

  getCounterValue(id:number): Observable<Counter>{
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+(id+40)+".json");
  }
}