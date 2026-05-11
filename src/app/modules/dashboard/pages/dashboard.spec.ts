import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { DashboardComponent } from './dashboard.component';
=======
import { DashboardComponent} from './dashboard.component';
>>>>>>> 2bbccb1dc63647eab3ac8ed41b196faca291417f

describe('Dashboard', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  it('should create', () => {
=======
  it('should create',() => {
>>>>>>> 2bbccb1dc63647eab3ac8ed41b196faca291417f
    expect(component).toBeTruthy();
  });
});
