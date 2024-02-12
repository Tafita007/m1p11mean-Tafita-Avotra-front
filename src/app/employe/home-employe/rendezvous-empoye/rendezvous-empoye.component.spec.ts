import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousEmpoyeComponent } from './rendezvous-empoye.component';

describe('RendezvousEmpoyeComponent', () => {
  let component: RendezvousEmpoyeComponent;
  let fixture: ComponentFixture<RendezvousEmpoyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezvousEmpoyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvousEmpoyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
