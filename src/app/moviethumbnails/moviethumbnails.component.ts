import { movieData } from './../movieandinfo/movieandinfo.component.data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-moviethumbnails',
  templateUrl: './moviethumbnails.component.html',
  styleUrls: ['./moviethumbnails.component.css']
})
export class MoviethumbnailsComponent implements OnInit {
  @Input() public movieThumbnails: movieData;
  @Output() public selectedMovie = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  newValueForRating(numRating: number) {
  // this.movieThumbnails.rating = numRating;
  }
  sendingId(id: number) {
    this.selectedMovie.emit(id);
  }
}

