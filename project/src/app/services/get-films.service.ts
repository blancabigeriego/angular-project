import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model';
import { delay, Observable } from 'rxjs';
import { deleteCharacter } from '../state/actions/delete-character.action';

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
    return this.http.post<Character>(`${this.BASE_URL}`, character)
  }

  editCharacter(character: Character): Observable<Character>{
    console.log(character)
    const body ={
      //id: character.id,
      name: character.name,
      films: character.films,
      shortFilms: character.shortFilms,
      tvShows: character.tvShows,
      videoGames: character.videoGames,
      allies: character.allies,
      enemies: character.enemies,
      imageUrl: character.imageUrl,
      parkAttractions: character.parkAttractions

    }
    return this.http.put<Character>(`${this.BASE_URL}/${character.id}`, body)
  }


  //I dont know if this is right?
  deleteCharacter(character: Character): void{
    
     this.http.delete<Character>(`${this.BASE_URL}/${character.id}`)
  }

  
}
