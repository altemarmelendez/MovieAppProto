import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from './../movie.service';
import { movieData } from './movieandinfo.component.data';
import { EventEmitter, Output } from '@angular/core';
import { SearchmoviePipe } from '../searchmovie.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchmovieService } from '../search/searchmovie.service';
import { SortMovieService } from '../navigationheader/sort-movie.service';
import { GenremenuService } from '../asidemenu/genremenu.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movieandinfo',
  templateUrl: './movieandinfo.component.html',
  styleUrls: ['./movieandinfo.component.css']
})
export class MovieandinfoComponent implements OnInit {

  public movieDataCollection: movieData[];
  public movieDetailsSelect: movieData;
  public movieTyped: string;
  @Output() movieDetailsData = new EventEmitter <movieData>();
  @Input() typingCurrentMovie: string;

  constructor(private movieService: MovieService,
              public searchmovieService: SearchmovieService,
              public sortMovieService: SortMovieService,
              public genremenuService: GenremenuService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => this.movieDataCollection = data);
  }

  getSelectedMovie(id: number) {
    this.movieService.getMovie(id).subscribe(data => this.movieDetailsData.emit(data[0]));
  }

}
