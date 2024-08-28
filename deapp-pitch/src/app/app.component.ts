import { Component, ViewChildren, QueryList, ElementRef, HostListener,ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChildren('page') pages!: QueryList<ElementRef>;
  currentIndex = 0;
  isAtBottom = false;
  isAtLastPage = false;

  ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener('scroll', () => this.onScrollContainerScroll());
  }
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const voorwaarden = params['voorwaarden'];
      if (voorwaarden) {
        this.router.navigate(['/voorwaarden']);
      }
    });
  }

  navigateTo(direction: 'next' | 'prev' | 'start'): void {
    // Calculate the new index
    if (direction === 'next' && this.currentIndex < this.pages.length - 1) {
      this.currentIndex++;
      if(this.currentIndex == this.pages.length - 1){
        this.isAtLastPage = true;
      }
    } else if (direction === 'prev' && this.currentIndex > 0) {
      this.currentIndex--;
      this.isAtLastPage = false;
    }else if (direction === 'start' && this.currentIndex > 0) {
      this.currentIndex=0;
      this.isAtLastPage = false;
    }

    // Scroll to the new page
    this.pages.toArray()[this.currentIndex].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onScrollContainerScroll() {
    const scrollPosition = this.scrollContainer.nativeElement.scrollTop + this.scrollContainer.nativeElement.clientHeight;
    const divHeight = this.scrollContainer.nativeElement.scrollHeight;
    console.log(scrollPosition, divHeight);
    this.isAtBottom = (scrollPosition >= divHeight * 0.95);
  }
}
