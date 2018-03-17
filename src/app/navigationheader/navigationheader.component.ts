import { Component, OnInit } from '@angular/core';
import { SortMovieService } from './sort-movie.service';

@Component({
  selector: 'app-navigationheader',
  templateUrl: './navigationheader.component.html',
  styleUrls: ['./navigationheader.component.css']
})
export class NavigationheaderComponent implements OnInit {

  constructor(public sortMovieService: SortMovieService) { }

  ngOnInit() {
  }
  onSortingChange(sortCategory: string) {
    this.sortMovieService.sortCategory = sortCategory;
  }
}
