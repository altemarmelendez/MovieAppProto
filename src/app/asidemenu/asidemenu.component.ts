import { Component, OnInit } from '@angular/core';
import { GenremenuService } from './genremenu.service';

@Component({
  selector: 'app-asidemenu',
  templateUrl: './asidemenu.component.html',
  styleUrls: ['./asidemenu.component.css']
})
export class AsidemenuComponent implements OnInit {

  constructor(public genremenuService: GenremenuService) { }

  ngOnInit() {
    this.genremenuService.genreCategory = 'all';
  }
  genreSelected(genre: string) {
    this.genremenuService.genreCategory = genre;
  }
}
