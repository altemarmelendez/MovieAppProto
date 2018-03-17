import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SectionComponent } from './section/section.component';
import { AsidemenuComponent } from './asidemenu/asidemenu.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { FooterComponent } from './footer/footer.component';
import { MovieandinfoComponent } from './movieandinfo/movieandinfo.component';
import { NavigationheaderComponent } from './navigationheader/navigationheader.component';
import { MovieService } from './movie.service';
import { SampleComponent } from './sample/sample.component';
import { MoviethumbnailsComponent } from './moviethumbnails/moviethumbnails.component';
import { StarsratingComponent } from './starsrating/starsrating.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SearchmoviePipe } from './searchmovie.pipe';
import { SearchmovieService } from './search/searchmovie.service';
import { SortMovieService } from './navigationheader/sort-movie.service';
import { SortmoviePipe } from './sortmovie.pipe';
import { GenremenuService } from './asidemenu/genremenu.service';
import { GenreCategoryPipe } from './genre-category.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SectionComponent,
    AsidemenuComponent,
    MaincontainerComponent,
    FooterComponent,
    MovieandinfoComponent,
    NavigationheaderComponent,
    SampleComponent,
    MoviethumbnailsComponent,
    StarsratingComponent,
    MoviedetailsComponent,
    SearchmoviePipe,
    SortmoviePipe,
    GenreCategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers:
    [MovieService,
    SearchmovieService,
    SortMovieService,
    GenremenuService],

  bootstrap: [AppComponent]
})
export class AppModule { }
