import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const EVENT_API = 'http://localhost:8080/events'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  getEventById(id: number):Observable<any>{
    return this.http.get(EVENT_API + id);
  }

  getAll(): Observable<any> {
    return this.http.get(EVENT_API);
  }

  updateEvent(event: any): Observable<any> {
    return this.http.post(EVENT_API, event)
  }
}
