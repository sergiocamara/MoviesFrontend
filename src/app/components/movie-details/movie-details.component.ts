import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  currentmovie = null;
  message = '';

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getMovie(this.route.snapshot.paramMap.get('id'));
  }

  getMovie(id): void {
    this.movieService.read(id)
      .subscribe(
        movie => {
          this.currentmovie = movie;
          console.log(movie);
        },
        error => {
          console.log(error);
        });
  }
  // setAvailableStatus(status): void {
  //   const data = {
  //     Title: this.currentmovie.Title,
  //     Description: this.currentmovie.Description,
  //     available: status
  //   };

  //   this.movieService.update(this.movieService.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentProduct.available = status;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // updateProduct(): void {
  //   this.movieService.update(this.currentmovie.id, this.currentmovie)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = 'The movie was updated!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // deleteProduct(): void {
  //   this.movieService.delete(this.currentmovie.id)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/movies']);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}
