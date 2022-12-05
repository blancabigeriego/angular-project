import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  readonly BASE_URL = 'http://localhost:8000/data';
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.BASE_URL}`).pipe(delay(1500));
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.BASE_URL}/${id}`);
  }
}
