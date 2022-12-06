// export interface Character {
//     films: string[],
//     shortFilms: string[],
//     tvShows: string[],
//     videoGames: string[],
//     parkAttractions: string[],
//     allies: string[],
//     enemies: string[],
//     id: number,
//     name: string,
//     imageUrl: string,
//     url: string
// }

export class Character{
    public films: string[];
    public shortFilms: string[];
    public tvShows: string[];
    public videoGames: string [];
    public parkAttractions: string[];
    public allies: string[];
    public enemies: string[];
    public id: number;
    public name: string;
    public imageUrl: string;

    constructor(films: string[], shortFilms: string[], tvShows: string[], videoGames: string[], parkAttractions: string[], allies: string[], enemies: string[], id: number, name: string, imageUrl: string ){
        this.films = films;
        this.shortFilms = shortFilms;
        this.tvShows = tvShows;
        this.videoGames = videoGames;
        this.parkAttractions = parkAttractions;
        this.allies = allies;
        this.enemies = enemies;
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;

    }

    public getFilms(): string[]{
        return this.films
    }

    public setFilms(films: string | string[]){
        if( typeof(films) === "string"){
            this.films = [films]
        }else{
            this.films = films;
        }
    }

    public getShortFilms(): string[]{
        
        return this.shortFilms;
        
    }

    public setShortFilms(shortFilms: string | string []){
        if( typeof(shortFilms) === "string"){
            this.shortFilms = [shortFilms]
        }else{
            this.shortFilms = shortFilms;
        }
    }

    public getTvShows(): string[]{
        return this.tvShows
    }

    public setTvShows( tvShows: string | string[]){
        if( typeof(tvShows) === "string"){
            this.tvShows = [tvShows]
        }else{
            this.tvShows = tvShows;
        }
    }

    public getVideoGames():string[]{
        return this.videoGames
    }

    public setVideoGames(videoGames: string | string[]){
        if( typeof(videoGames) === "string"){
            this.videoGames = [videoGames]
        }else{
            this.videoGames = videoGames;
        }
    }

    public getParkAttractions(): string[]{
        return this.parkAttractions;
    }
    public setParkAttractions(parkAttractions: string | string []){
        if( typeof(parkAttractions) === "string"){
            this.parkAttractions = [parkAttractions]
        }else{
            this.parkAttractions = parkAttractions;
        }
    }

    public getAllies(): string[]{
        return this.allies;
    }

    public setAllies(allies: string | string[]){
        if( typeof(allies) === "string"){
            this.allies = [allies]
        }else{
            this.allies = allies;
        }
    }

    public getEnemies(): string[]{
        return this.enemies;
    }
    public setEnemies(enemies: string | string[]){
        if( typeof(enemies) === "string"){
            this.enemies = [enemies]
        }else{
            this.enemies = enemies;
        }
    }

    public getId(): number{
        return this.id;
    }

    public setId(id: number){
        this.id = id;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string){
        this.name= name;
    }

    public getImageUrl(): string{
        return this.imageUrl
    }

    public setImageUrl(imageUrl: string){
        this.imageUrl= imageUrl;
    }




    

}





