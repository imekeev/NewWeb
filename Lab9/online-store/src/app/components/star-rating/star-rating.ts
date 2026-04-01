import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  rating = input<number>(0);
  readonly = input<boolean>(false);
  ratingChange = output<number>();
  hoveredRating = 0;

  onStarHover(star: number) {
    if(!this.readonly()){
      this.hoveredRating = star;
    }
  }
  onStarLeave() {
    if(!this.readonly()){
      this.hoveredRating = 0;
    }
  }
  onStarClick(star: number) {
    if(!this.readonly()){
      this.ratingChange.emit(star);
    }
  }
  isStarFilled(star: number): boolean {
    if(this.hoveredRating > 0) {
      return star <= this.hoveredRating;
    }
    return star <= this.rating();
  }
}
