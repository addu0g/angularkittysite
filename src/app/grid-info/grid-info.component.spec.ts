import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { GridInfoComponent } from './grid-info.component';

describe('GridInfoComponent', () => {
  let component: GridInfoComponent;
  let fixture: ComponentFixture<GridInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridInfoComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
