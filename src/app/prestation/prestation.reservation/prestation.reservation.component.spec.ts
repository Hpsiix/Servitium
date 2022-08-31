import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationReservationComponent } from './prestation.reservation.component';

describe('PrestationReservationComponent', () => {
  let component: PrestationReservationComponent;
  let fixture: ComponentFixture<PrestationReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
