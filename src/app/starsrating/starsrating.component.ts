import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { movieData } from './../movieandinfo/movieandinfo.component.data';
import { NgClass } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-starsrating',
  templateUrl: './starsrating.component.html',
  styleUrls: ['./starsrating.component.css']
})
export class StarsratingComponent implements OnInit {
@Input() public ratingNumbers: number;
@Input() public idMovie: number;
@Output() public starValueChange = new EventEmitter<number>();
  public movieInfo: movieData;
  public numberOfStars: number;
  public yellowStars: string;
  constructor(public postRatings: MovieService) { }

  ngOnInit() {
      this.numberOfStars = Math.round(this.ratingNumbers);
      this.startValueB(this.numberOfStars);
}

startValue(stars: number) {
  this.yellowStars = '';
  for (let index = 0; index < Math.round(stars / 2); index++) {
  this.yellowStars += `<img width="10" src="/assets/ratingstar.png" >`;
    }
    this.postRatings.postStars(this.idMovie, stars).subscribe(res => console.log(res));
  }

  startValueB(stars: number) {
    this.yellowStars = '';
    for (let index = 0; index < Math.round(stars / 2); index++) {
    this.yellowStars += `<img width="10" src="/assets/ratingstar.png" >`;
      }
    }

}
