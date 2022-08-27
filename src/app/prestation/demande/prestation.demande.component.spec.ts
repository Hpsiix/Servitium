import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationDemandeComponent } from './prestation.demande.component';

describe('PrestationDemandeComponent', () => {
  let component: PrestationDemandeComponent;
  let fixture: ComponentFixture<PrestationDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
