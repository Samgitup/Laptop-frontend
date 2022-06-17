import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLaptopComponent } from './user-laptop.component';

describe('UserLaptopComponent', () => {
  let component: UserLaptopComponent;
  let fixture: ComponentFixture<UserLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
