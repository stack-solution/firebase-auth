import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationPage } from './authentication.page';

describe('AuthenticationComponent', () => {
  let component: AuthenticationPage;
  let fixture: ComponentFixture<AuthenticationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});