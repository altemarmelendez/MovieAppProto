import { Pipe, PipeTransform } from '@angular/core';
import { movieData } from './movieandinfo/movieandinfo.component.data';

@Pipe({
  name: 'genreCategory'
})
export class GenreCategoryPipe implements PipeTransform {

  transform(movies: movieData[], genre: string): movieData[] {
    if (genre === 'all' || genre === undefined) {
      return movies;
    } else {
      return movies.filter((movieIndividual) => movieIndividual.genre.toLowerCase().includes(genre.toLowerCase()));
    }
  }

}
