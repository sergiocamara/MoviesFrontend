import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;
  currentMovie = null;
  currentIndex = -1;
  Title = '';
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.readMovies();
  }

  readMovies(): void {
    this.movieService.readAll()
      .subscribe(
        movies => {
          this.movies = movies;
          console.log(movies);
        },
        error => {
          console.log(error);
        });
  }
  refresh(): void {
    this.readMovies();
    this.currentMovie = null;
    this.currentIndex = -1;
  }
  setCurrentMovie(movie, index): void {
    this.currentMovie = movie;
    this.currentIndex = index;
  }
  deleteAllMovies(): void {
    this.movieService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readMovies();
        },
        error => {
          console.log(error);
        });
  }

  searchByTitle(): void {
    this.movieService.searchByTitle(this.Title)
      .subscribe(
        movies => {
          this.movies = movies;
          console.log(movies);
        },
        error => {
          console.log(error);
        });
  }

}
