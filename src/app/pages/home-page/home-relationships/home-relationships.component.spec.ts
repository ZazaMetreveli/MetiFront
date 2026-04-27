import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRelationshipsComponent } from './home-relationships.component';

describe('HomeRelationshipsComponent', () => {
  let component: HomeRelationshipsComponent;
  let fixture: ComponentFixture<HomeRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRelationshipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
