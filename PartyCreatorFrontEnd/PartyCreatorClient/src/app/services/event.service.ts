import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventDto } from '../interfaces/event-dto';
import { EventCreateDto } from '../interfaces/event-create-dto';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl: string = "https://localhost:7241/api/Auth/"
  private baseUrl2: string = "https://localhost:7241/api/Event/"
  constructor(private http: HttpClient) { }

  getMe() {
    return this.http.get<string>(`${this.baseUrl}getme`);
  }

  getOfCreator() {
    return this.http.get<EventDto[]>(`${this.baseUrl2}getOfCreator`);
  }

  createEvent(eventObj: EventCreateDto) {
    return this.http.post<EventDto>(`${this.baseUrl2}create`,eventObj);
  }
}