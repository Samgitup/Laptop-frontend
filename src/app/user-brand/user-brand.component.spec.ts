import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBrandComponent } from './user-brand.component';

describe('UserBrandComponent', () => {
  let component: UserBrandComponent;
  let fixture: ComponentFixture<UserBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
