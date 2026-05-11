import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home';

<<<<<<< HEAD
describe('HomeComponent', () => {
=======
describe('Home', () => {
>>>>>>> 2bbccb1dc63647eab3ac8ed41b196faca291417f
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
