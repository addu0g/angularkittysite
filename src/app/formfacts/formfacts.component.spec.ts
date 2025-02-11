import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfactsComponent } from './formfacts.component';

describe('FormfactsComponent', () => {
  let component: FormfactsComponent;
  let fixture: ComponentFixture<FormfactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
