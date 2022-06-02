import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShowroomComponent } from './update-showroom.component';

describe('UpdateShowroomComponent', () => {
  let component: UpdateShowroomComponent;
  let fixture: ComponentFixture<UpdateShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateShowroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
