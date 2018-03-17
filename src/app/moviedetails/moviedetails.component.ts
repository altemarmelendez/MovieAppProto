import { Component, OnInit, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { movieData } from '../movieandinfo/movieandinfo.component.data';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  @Output() onOffDetails = new EventEmitter();
  @Input() public detailsMovieSelected: movieData;

  constructor() { }

  ngOnInit() {
  }
  showMovies() {
    this.onOffDetails.emit();
  }
}
