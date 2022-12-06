import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFilmsService {

  readonly BASE_URL = 'http://localhost:8000/films';
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.BASE_URL}`).pipe(delay(1500));
  }

  getCharacterById(id: number): Observable<Character> {
    
    return this.http.get<Character>(`${this.BASE_URL}/${id}`);
  }

  createCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(`${this.BASE_URL}/characters`, character)
  }


  //I dont know if this is right
  // editCharacter(id: number, character: Character): Observable<Character>{
  //   return this.http.put<Character>(`${this.BASE_URL}/characters/${id}`, character)
  // }

  
}
