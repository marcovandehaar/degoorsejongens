import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren('page') pages!: QueryList<ElementRef>;
  currentIndex = 0;

  navigateTo(direction: 'next' | 'prev'): void {
    // Calculate the new index
    if (direction === 'next' && this.currentIndex < this.pages.length - 1) {
      this.currentIndex++;
    } else if (direction === 'prev' && this.currentIndex > 0) {
      this.currentIndex--;
    }

    // Scroll to the new page
    this.pages.toArray()[this.currentIndex].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
