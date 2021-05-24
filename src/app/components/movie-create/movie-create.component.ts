import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  movie = {
    Title: '',
    Description: '',
    Director: '',
    Date: '',
    Rate: 0
  };
  submitted = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  createMovie(): void {
    const data = {
      Title: this.movie.Title,
      Description: this.movie.Description,
      Date: this.movie.Date,
      Director: this.movie.Director,
      Rate: this.movie.Rate
    };

    this.movieService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newMovie(): void {
    this.submitted = false;
    this.movie = {
      Title: '',
      Description: '',
      Director: '',
      Date: '',
      Rate: 0
    };
  }

}
