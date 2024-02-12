import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEmployeComponent } from './footer-employe.component';

describe('FooterEmployeComponent', () => {
  let component: FooterEmployeComponent;
  let fixture: ComponentFixture<FooterEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
