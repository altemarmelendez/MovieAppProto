import { Injectable } from '@angular/core';
import { movieData } from './movieandinfo/movieandinfo.component.data';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class MovieService {
  public moviesUrls = 'http://localhost:3000/movies/';
  public urlPost = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  // constructor must inject the HTTPClient module

  getMovies(): Observable<movieData[]> {
    const URLAll = this.moviesUrls;
    return this.http.get<movieData[]>(URLAll);
  }

    // make an http get call to fetch all movies
    // use the Observable pattern to return it

getMovie(id: number): Observable<movieData> {
  const URLMOVIE = `${this.moviesUrls}`;
  return this.http.get<movieData>(URLMOVIE + `${id}`);
  }

postStars(idMovie: number, numberStars: number) {
  const URLSTARS = `${this.urlPost}stars`;
  const rating = numberStars;
  const SEARCH = new URLSearchParams();
  return this.http.post(URLSTARS, {id: idMovie, starsRating: rating});
  }
}
