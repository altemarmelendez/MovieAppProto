import { Pipe, PipeTransform } from '@angular/core';
import { movieData } from './movieandinfo/movieandinfo.component.data';

@Pipe({
  name: 'sortmovie',
  pure: false
})
export class SortmoviePipe implements PipeTransform {

  transform(sortMovie: movieData[], category: String): movieData[] {
    if (category === 'name') {
    return sortMovie.sort( (a: movieData, b: movieData) => {
      if ( a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    }) ;
    }else if (category === 'rating') {
          return sortMovie.sort((a: movieData, b: movieData) =>  {
            if ( a.rating < b.rating) {
              return 1;
            } else if (a.rating > b.rating) {
              return -1;
            } else {
              return 0;
            }
          }) ;
    }else if (category === 'year') {
          return sortMovie.sort((a: movieData, b: movieData) =>  {
            if ( a.releaseDate < b.releaseDate) {
              return -1;
            } else if (a.rating > b.rating) {
              return 1;
            } else {
              return 0;
            }
          }) ;
    }else if (category === undefined) {
      return sortMovie;
      }
  }

}
