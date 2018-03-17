import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchmovieService } from './searchmovie.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public searchMovieService: SearchmovieService) {

  }

  ngOnInit() {
  }
}
