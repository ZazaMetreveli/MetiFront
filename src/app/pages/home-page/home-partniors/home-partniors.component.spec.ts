import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartniorsComponent } from './home-partniors.component';

describe('HomePartniorsComponent', () => {
  let component: HomePartniorsComponent;
  let fixture: ComponentFixture<HomePartniorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePartniorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePartniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
