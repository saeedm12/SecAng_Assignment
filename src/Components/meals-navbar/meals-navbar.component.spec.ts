import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsNavbarComponent } from './meals-navbar.component';

describe('MealsNavbarComponent', () => {
  let component: MealsNavbarComponent;
  let fixture: ComponentFixture<MealsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
