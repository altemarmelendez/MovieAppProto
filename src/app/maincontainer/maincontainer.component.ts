import { Component, OnInit } from '@angular/core';
import { movieData } from '../movieandinfo/movieandinfo.component.data';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {
public displayDetails: boolean;
public selectedMovie: movieData;
  constructor() { }

  ngOnInit() {
    this.displayDetails = false;
  }

  onShowMovies() {
    this.displayDetails = false;
  }
  onMovieSelected(movie: movieData) {
    this.selectedMovie = movie;
    this.displayDetails = true;
  }
}
