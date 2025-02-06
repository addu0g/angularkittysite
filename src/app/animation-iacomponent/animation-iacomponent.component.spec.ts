import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationIAComponentComponent } from './animation-iacomponent.component';

describe('AnimationIAComponentComponent', () => {
  let component: AnimationIAComponentComponent;
  let fixture: ComponentFixture<AnimationIAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationIAComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationIAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
