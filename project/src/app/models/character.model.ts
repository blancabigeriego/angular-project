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

    getFilms(): string[]{
        return this.films
    }

    setFilms(films: any){
        if( typeof(films) === "string"){
            this.films = [films]
        }else{
            this.films = films;
        }
    }

    getShortFilms(): string[]{
        
        return this.shortFilms;
        
    }

    setShortFilms(shortFilms: any){
        if( typeof(shortFilms) === "string"){
            this.shortFilms = [shortFilms]
        }else{
            this.shortFilms = shortFilms;
        }
    }

    getTvShows(): string[]{
        return this.tvShows
    }

    setTvShows( tvShows: any){
        if( typeof(tvShows) === "string"){
            this.tvShows = [tvShows]
        }else{
            this.tvShows = tvShows;
        }
    }

    getVideoGames():string[]{
        return this.videoGames
    }

    setVideoGames(videoGames: any){
        if( typeof(videoGames) === "string"){
            this.videoGames = [videoGames]
        }else{
            this.videoGames = videoGames;
        }
    }

    getParkAttractions(): string[]{
        return this.parkAttractions;
    }
    setParkAttractions(parkAttractions: any){
        if( typeof(parkAttractions) === "string"){
            this.parkAttractions = [parkAttractions]
        }else{
            this.parkAttractions = parkAttractions;
        }
    }

    getAllies(): string[]{
        return this.allies;
    }

    setAllies(allies: any){
        if( typeof(allies) === "string"){
            this.allies = [allies]
        }else{
            this.allies = allies;
        }
    }

    getEnemies(): string[]{
        return this.enemies;
    }
    setEnemies(enemies: any){
        if( typeof(enemies) === "string"){
            this.enemies = [enemies]
        }else{
            this.enemies = enemies;
        }
    }

    getId(): number{
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string){
        this.name= name;
    }

    getImageUrl(): string{
        return this.imageUrl
    }

    setImageUrl(imageUrl: string){
        this.imageUrl= imageUrl;
    }




    

}





