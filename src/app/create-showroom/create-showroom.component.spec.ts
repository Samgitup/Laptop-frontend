import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShowroomComponent } from './create-showroom.component';

describe('CreateShowroomComponent', () => {
  let component: CreateShowroomComponent;
  let fixture: ComponentFixture<CreateShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShowroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
