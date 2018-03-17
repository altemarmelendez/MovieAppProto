import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { movieData } from './../movieandinfo/movieandinfo.component.data';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  @Input() public mojon: movieData;
  @Output() public selectedMovie = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNameClicked() {
    this.selectedMovie.emit(this.mojon.name);
  }

}
