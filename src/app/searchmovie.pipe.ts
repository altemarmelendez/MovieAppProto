import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchmovie',
  pure: false
})
export class SearchmoviePipe implements PipeTransform {

  transform(movies: any, movie: any): any {
    if (movie === undefined) { return movies; }
      return movies.filter(function(individualmovie) {
        return individualmovie.name.toLowerCase().startsWith(movie.toLowerCase());
      });
  }
}
