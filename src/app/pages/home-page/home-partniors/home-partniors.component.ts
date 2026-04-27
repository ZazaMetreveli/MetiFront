import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type PartnerReview = {
  company: string;
  quote: string;
  author: string;
};

@Component({
  selector: 'app-home-partniors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-partniors.component.html',
  styleUrl: './home-partniors.component.css'
})
export class HomePartniorsComponent {
  private readonly compactBreakpoint = 980;
  protected readonly partnerLogos = Array.from({ length: 13 }, (_, index) => ({
    src: `icons/partners-icons/${index + 1}.png`,
    alt: `Partner ${index + 1}`
  }));

  protected readonly reviews: PartnerReview[] = [
    {
      company: 'Illuminati Billiards Club and Bar',
      quote: 'Meti Agency-სთან თანამშრომლობამ მნიშვნელოვანი შედეგები მოგვიტანა, განსაკუთრებით გაყიდვების ზრდის კუთხით. მათი სტრატეგია და კონტენტი მკაფიოდ არის ორიენტირებული შედეგებზე, რაც ჩვენს ბრენდზეც აისახა. გუნდი კარგად გრძნობს ბაზარს და სწორად მართავს კომუნიკაციას.',
      author: 'დავით ქვრივიძე, დამფუძნებელი'
    },
    {
      company: 'Riverside Cafe',
      quote: 'თანამშრომლობის პროცესში ყველაზე მეტად დავაფასეთ მათი სისწრაფე, დეტალებზე ყურადღება და კომუნიკაციის კულტურა. კამპანიები დაგეგმილი იყო მკაფიოდ და შედეგიც სწრაფად გამოჩნდა როგორც ცნობადობაში, ისე მომხმარებლის ჩართულობაში.',
      author: 'ნინო ბერიძე, მარკეტინგის მენეჯერი'
    },
    {
      company: 'Aurum Construction',
      quote: 'Meti Agency-მ ჩვენი შეთავაზება უფრო გასაგები და კონკურენტული გახადა. მათ მიერ მომზადებული კომუნიკაცია ზუსტად მოხვდა საჭირო აუდიტორიაში, რამაც ხარისხიანი ლიდების რაოდენობა შესამჩნევად გაზარდა.',
      author: 'გიორგი მელაძე, კომერციული დირექტორი'
    },
    {
      company: 'Lime Fitness Studio',
      quote: 'გვჭირდებოდა პარტნიორი, რომელიც მხოლოდ ვიზუალს კი არა, გაყიდვების ლოგიკასაც სწორად ააწყობდა. გუნდმა ზუსტად ეს გააკეთა და მოკლე დროში მიგვაღებინა ბევრად უფრო ძლიერი ონლაინ შედეგი.',
      author: 'თეა კალანდაძე, დამფუძნებელი'
    },
    {
      company: 'Illuminati Billiards Club and Bar',
      quote: 'Meti Agency-სთან თანამშრომლობამ მნიშვნელოვანი შედეგები მოგვიტანა, განსაკუთრებით გაყიდვების ზრდის კუთხით. მათი სტრატეგია და კონტენტი მკაფიოდ არის ორიენტირებული შედეგებზე, რაც ჩვენს ბრენდზეც აისახა. გუნდი კარგად გრძნობს ბაზარს და სწორად მართავს კომუნიკაციას.',
      author: 'დავით ქვრივიძე, დამფუძნებელი'
    },
    {
      company: 'Riverside Cafe',
      quote: 'თანამშრომლობის პროცესში ყველაზე მეტად დავაფასეთ მათი სისწრაფე, დეტალებზე ყურადღება და კომუნიკაციის კულტურა. კამპანიები დაგეგმილი იყო მკაფიოდ და შედეგიც სწრაფად გამოჩნდა როგორც ცნობადობაში, ისე მომხმარებლის ჩართულობაში.',
      author: 'ნინო ბერიძე, მარკეტინგის მენეჯერი'
    },
    {
      company: 'Aurum Construction',
      quote: 'Meti Agency-მ ჩვენი შეთავაზება უფრო გასაგები და კონკურენტული გახადა. მათ მიერ მომზადებული კომუნიკაცია ზუსტად მოხვდა საჭირო აუდიტორიაში, რამაც ხარისხიანი ლიდების რაოდენობა შესამჩნევად გაზარდა.',
      author: 'გიორგი მელაძე, კომერციული დირექტორი'
    },
    {
      company: 'Lime Fitness Studio',
      quote: 'გვჭირდებოდა პარტნიორი, რომელიც მხოლოდ ვიზუალს კი არა, გაყიდვების ლოგიკასაც სწორად ააწყობდა. გუნდმა ზუსტად ეს გააკეთა და მოკლე დროში მიგვაღებინა ბევრად უფრო ძლიერი ონლაინ შედეგი.',
      author: 'თეა კალანდაძე, დამფუძნებელი'
    },
  ];

  protected slidesPerView = this.getSlidesPerView();
  protected currentSlide = 0;

  protected get slides(): PartnerReview[][] {
    return this.chunkReviews(this.reviews, this.slidesPerView);
  }

  protected get trackTransform(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  @HostListener('window:resize')
  protected onResize(): void {
    const nextSlidesPerView = this.getSlidesPerView();

    if (nextSlidesPerView === this.slidesPerView) {
      return;
    }

    this.slidesPerView = nextSlidesPerView;
    this.currentSlide = Math.min(this.currentSlide, this.slides.length - 1);
  }

  protected goToSlide(index: number): void {
    if (index < 0 || index >= this.slides.length) {
      return;
    }

    this.currentSlide = index;
  }

  protected showPrevious(): void {
    this.goToSlide(this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1);
  }

  protected showNext(): void {
    this.goToSlide((this.currentSlide + 1) % this.slides.length);
  }

  private chunkReviews(reviews: PartnerReview[], size: number): PartnerReview[][] {
    const chunks: PartnerReview[][] = [];

    for (let index = 0; index < reviews.length; index += size) {
      chunks.push(reviews.slice(index, index + size));
    }

    return chunks;
  }

  private getSlidesPerView(): number {
    if (typeof window === 'undefined') {
      return 2;
    }

    return window.innerWidth <= this.compactBreakpoint ? 1 : 2;
  }
}
